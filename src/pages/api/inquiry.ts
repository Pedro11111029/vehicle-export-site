// 表单后端：Turnstile 验证 → 写入 D1 → 异步发邮件（Resend）
// 只有这个路由是动态的，其他页面都是纯静态 HTML（对 SEO 有利）
export const prerender = false;

import type { APIRoute } from 'astro';
import { SITE } from '../../config/site.ts';

type Env = {
  DB?: any;
  TURNSTILE_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  OWNER_EMAIL?: string;
  FROM_EMAIL?: string;
};

const MAX = { name: 80, email: 120, company: 120, country: 60, message: 3000 };

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const clean = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max);

export const POST: APIRoute = async ({ request, locals }) => {
  const env: Env = (locals as any)?.runtime?.env ?? {};

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  // 蜜罐：机器人填了就静默丢弃
  if (String(data.website ?? '').trim()) return json({ ok: true });

  const name = clean(data.name, MAX.name);
  const email = clean(data.email, MAX.email);
  const company = clean(data.company, MAX.company);
  const country = clean(data.country, MAX.country);
  const product = clean(data.product, 80);
  const message = clean(data.message, MAX.message);
  const token = clean(data.turnstileToken, 2048);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return json({ ok: false, error: 'Please provide a valid name, email and message.' }, 400);
  }

  const ip = request.headers.get('cf-connecting-ip') ?? '';
  const userAgent = (request.headers.get('user-agent') ?? '').slice(0, 300);

  // ---------- 1. 人机验证 ----------
  const turnstileSecret = env.TURNSTILE_SECRET_KEY;
  const isTestKey = !turnstileSecret || turnstileSecret.startsWith('1x0000000000000000000000000000000AA');

  if (!isTestKey) {
    if (!token) return json({ ok: false, error: 'Please complete the human verification.' }, 400);

    const form = new FormData();
    form.append('secret', turnstileSecret!);
    form.append('response', token);
    if (ip) form.append('remoteip', ip);

    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: form,
    });
    const result = (await verify.json()) as { success: boolean };
    if (!result.success) {
      return json({ ok: false, error: 'Human verification failed. Please try again.' }, 400);
    }
  }

  // ---------- 2. 写入 D1（先落库，保证不丢）----------
  let saved = false;
  if (env.DB) {
    try {
      await env.DB.prepare(
        `INSERT INTO inquiries (name, email, company, country, product, message, ip, user_agent)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(name, email, company, country, product, message, ip, userAgent).run();
      saved = true;
    } catch (err) {
      console.error('D1 insert failed', err);
    }
  } else {
    // 本地开发没有绑定 D1 时，只打印到终端
    console.log('[DEV] Inquiry received:', { name, email, company, country, product, message });
  }

  // ---------- 3. 异步发邮件（不阻塞用户看到成功提示）----------
  const sendEmails = async () => {
    if (!env.RESEND_API_KEY || !env.OWNER_EMAIL || !env.FROM_EMAIL) return;

    const resend = (payload: unknown) =>
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }).catch((err) => console.error('Resend error', err));

    // 通知你自己
    await resend({
      from: `${SITE.name} <${env.FROM_EMAIL}>`,
      to: [env.OWNER_EMAIL],
      reply_to: email,
      subject: `New inquiry — ${country || 'unknown country'} — ${product || 'general'}`,
      html: `
        <h2>New inquiry from the website</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><b>Name</b></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><b>Company</b></td><td>${escapeHtml(company || '—')}</td></tr>
          <tr><td><b>Country</b></td><td>${escapeHtml(country || '—')}</td></tr>
          <tr><td><b>Product</b></td><td>${escapeHtml(product || '—')}</td></tr>
        </table>
        <p style="white-space:pre-wrap;font-family:sans-serif;font-size:14px">${escapeHtml(message)}</p>
        <p style="color:#888;font-size:12px">IP ${escapeHtml(ip || '—')} · Saved to database: ${saved ? 'yes' : 'no'}</p>
      `,
    });

    // 自动回复客户
    await resend({
      from: `${SITE.name} <${env.FROM_EMAIL}>`,
      to: [email],
      subject: `We received your inquiry — ${SITE.name}`,
      html: `
        <p>Dear ${escapeHtml(name)},</p>
        <p>Thank you for contacting ${escapeHtml(SITE.name)}. We have received your inquiry and
        will reply within 24 hours on business days.</p>
        <p><b>Your message:</b></p>
        <p style="white-space:pre-wrap;color:#555">${escapeHtml(message)}</p>
        <p>If your request is urgent, message us on WhatsApp: ${escapeHtml(SITE.whatsapp)}</p>
        <p>Best regards,<br/>${escapeHtml(SITE.name)}<br/>${escapeHtml(SITE.email)}</p>
      `,
    });
  };

  const ctx = (locals as any)?.runtime?.ctx;
  if (ctx?.waitUntil) ctx.waitUntil(sendEmails());
  else await sendEmails();

  return json({ ok: true });
};
