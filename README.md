# Vehicle Export Website

一个面向海外 B2B 买家的车辆出口官网骨架。纯静态 HTML 输出（SEO 友好）+ Cloudflare Pages Functions 处理询盘。

**技术栈**：Astro 5 · Cloudflare Pages · D1 · Resend · Turnstile
**成本**：域名约 ¥100/年，其余在免费额度内
**线上预览**：https://vehicle-export-site.pages.dev （正式域名 `usedtruk.com` 绑定中）

---

## 一、改内容（只需要动一个文件）

打开 `src/config/site.ts`，把所有 `TODO` 替换成你的真实信息：

| 字段 | 说明 |
| --- | --- |
| `url` | 你的域名，如 `https://yourdomain.com`（必须带 https，结尾不加斜杠） |
| `name` / `legalName` | 品牌名 / 公司注册名 |
| `description` | 首页描述，也用于 SEO meta description（120–155 字符最佳） |
| `email` / `phone` / `whatsapp` | `whatsapp` 格式：国家码+号码，如 `+8613800000000` |
| `address` | 公司地址（海外买家会看，务必真实） |
| `stats` | 首页数字条 |
| `certifications` | 认证徽章 |

产品在同一个文件下方的 `PRODUCTS` 数组里，三个产品页由它自动生成：

```ts
{
  slug: 'passenger-vehicles',      // URL：/products/passenger-vehicles/
  name: 'Passenger Vehicles',      // 页面标题
  shortName: 'Passenger Cars',     // 小标签
  tagline: '...',                  // 一句话卖点
  summary: '...',                  // 段落介绍
  highlights: ['...'],             // 卖点列表
  specs: [{ label: '...', value: '...' }],  // 参数表
  faqs: [{ q: '...', a: '...' }],  // FAQ（会生成 FAQ 结构化数据）
}
```

> 增删产品 = 增删数组元素，不需要新建页面文件。

**图片**：产品图放在 `public/images/`，然后在 `src/config/site.ts` 的 `PRODUCTS` 里加 `image: '/images/xxx.jpg'`，
再把 `src/pages/products/[slug].astro` 里的 `<div class="card-media">` 换成 `<img>`。

**分享图**：`public/og-image.jpg`（1200×630）已生成。改了品牌名或域名后重新生成：

```powershell
powershell -ExecutionPolicy Bypass -File scripts/make-og-image.ps1
```

### 写博客文章

文章放在 `src/content/blog/`，**一个 `.md` 文件 = 一篇**，自动生成 `/blog/文件名/`，并进入列表页、sitemap 和 RSS（`/rss.xml`）。不需要新建 `.astro` 页面。

```markdown
---
title: 'Your article title'
description: '150 字符内的摘要，用于列表页和 SEO description'
pubDate: 2026-11-05
updatedDate: 2026-11-10   # 可选
author: 'Sales Team'      # 可选
tags: ['Import Guide']    # 可选，用于分类和相关文章
image: '/images/blog/xxx.jpg'  # 可选，列表卡片配图
draft: false              # true = 仅本地可见，不会构建上线
---

正文用 Markdown 写，支持标题、表格、列表、引用。
```

> 文件名建议用英文短横线（如 `how-to-import-vehicles`），它就是 URL。
> 标题写 `##` 会自动生成右侧目录（桌面端）和锚点链接。

---

## 二、本地预览

```powershell
npm install
npm run dev
```

打开 http://localhost:4321

本地没有 D1 和 Resend 时，表单仍可提交，内容会打印在终端里（不会报错）。

---

## 三、部署到 Cloudflare Pages

### 1. 建 D1 数据库

```powershell
npx wrangler login
npx wrangler d1 create inquiries
```

把返回的 `database_id` 填进 `wrangler.toml`。

建表：

```powershell
npx wrangler d1 execute inquiries --remote --file=./schema.sql
```

### 2. 推到 GitHub（强烈建议）

```powershell
git init
git add .
git commit -m "initial site"
# 在 GitHub 网页上新建一个空仓库，然后：
git remote add origin https://github.com/你的用户名/你的仓库.git
git push -u origin main
```

### 3. Cloudflare Pages 接仓库

Cloudflare 后台 → Workers & Pages → Create → Pages → Connect to Git：

| 设置项 | 值 |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20 或 22（环境变量 `NODE_VERSION`） |

### 4. 绑定 D1

Pages 项目 → Settings → Functions → D1 database bindings：

- Variable name: `DB`
- D1 database: `inquiries`

### 5. 环境变量（Settings → Environment variables，Production 和 Preview 都加）

| 变量 | 值 |
| --- | --- |
| `PUBLIC_TURNSTILE_SITE_KEY` | Turnstile 站点的 Site Key |
| `TURNSTILE_SECRET_KEY` | Turnstile 的 Secret Key（加密保存） |
| `RESEND_API_KEY` | Resend 的 API Key（加密保存） |
| `OWNER_EMAIL` | 你自己的收件邮箱 |
| `FROM_EMAIL` | 发件地址，如 `notify@send.yourdomain.com` |

### 6. 绑定自定义域名

Pages 项目 → Custom domains → 输入域名，按提示在 Cloudflare DNS 里加 CNAME。

---

## 四、Turnstile（防垃圾询盘）

1. Cloudflare 后台 → Turnstile → Add site
2. Domain 填你的域名，Widget 模式选 Managed
3. 把 Site Key 填到 `PUBLIC_TURNSTILE_SITE_KEY`，Secret Key 填到 `TURNSTILE_SECRET_KEY`

本地开发用测试密钥就行（已在 `.env.example` 里给出，永远验证通过）。

---

## 五、Resend（收发询盘邮件）

1. 注册 https://resend.com，Add Domain
2. **用子域名发信**：添加 `send.yourdomain.com`（不要用主域名，避免和 Cloudflare Email Routing 的 MX 冲突）
3. 按提示在 Cloudflare DNS 加 TXT / MX 记录，等验证通过
4. Create API Key → 填到 `RESEND_API_KEY`
5. `FROM_EMAIL` 填 `notify@send.yourdomain.com`

**别忘了在 `yourdomain.com` 上加 DMARC**（Gmail/Yahoo 现在强制要求）：

```
TXT  _dmarc.yourdomain.com  v=DMARC1; p=none; rua=mailto:你的邮箱
```

### 收客户回复邮件

Cloudflare 后台 → Email → Email Routing → 启用，把 `sales@yourdomain.com` 转发到你的 Gmail。
这样客户回复询盘邮件时你能收到，而发信仍走 Resend。

---

## 六、上线后必做（SEO）

1. **Google Search Console** → 添加资源 → 用 DNS TXT 验证 → 提交 `https://你的域名/sitemap-index.xml`
2. **Bing Webmaster Tools** → 可从 GSC 一键导入
3. **Cloudflare Web Analytics** → 开启（无 cookie，不需要弹同意框）
4. 逐页检查：`title` 唯一、`description` 175 字符内、H1 只有一个
5. 用 https://pagespeed.web.dev 跑一次首页和产品页，LCP < 2.5s

---

## 七、日常操作

```powershell
# 查看收到的询盘
npx wrangler d1 execute inquiries --remote --command "SELECT id, created_at, name, email, country, product FROM inquiries ORDER BY id DESC LIMIT 50"

# 导出备份
npx wrangler d1 export inquiries --remote --output=backup.sql

# 本地跑 Cloudflare 环境（含 D1 绑定）
npm run preview
```

改内容 → `git push` → Cloudflare 自动构建部署，约 1 分钟上线。

---

## 八、目录结构

```
src/
  config/site.ts        ← 所有内容和配置都在这里
  content.config.ts     ← 博客内容集合的字段定义和校验
  content/blog/*.md     ← 博客文章（一个文件一篇）
  lib/blog.ts           ← 文章排序、日期、阅读时长等小工具
  layouts/Base.astro    ← SEO meta、JSON-LD、页头页脚
  components/
    InquiryForm.astro   ← 询盘表单（Turnstile + 前端校验）
  pages/
    index.astro         ← 首页
    products/index.astro
    products/[slug].astro ← 产品页模板（自动生成 3 页）
    blog/index.astro    ← 文章列表
    blog/[...slug].astro ← 文章页模板（带目录、相关文章、BlogPosting 结构化数据）
    about.astro / contact.astro
    privacy.astro / terms.astro
    robots.txt.ts
    rss.xml.ts          ← RSS 订阅源
    api/inquiry.ts      ← 表单后端：验证 → D1 → Resend
  styles/global.css
public/                 ← favicon、图片、og-image
schema.sql              ← D1 建表语句
wrangler.toml           ← Pages + D1 绑定
```

## 九、还没做的（建议后续补）

- 持续写行业文章（博客模块已就绪，建议每月 2–4 篇）——这是长期 SEO 的主要动力
- 多语言（西语 / 法语 / 阿拉伯语），用 `/es/` 子目录 + `hreflang`
- 按 IP 的频率限制（Cloudflare Rate Limiting 规则）
- 询盘同步到飞书表格 / Telegram 通知
- 真实的公司照片、工厂视频、客户 logo
