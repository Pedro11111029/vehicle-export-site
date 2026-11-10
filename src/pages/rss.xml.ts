import type { APIRoute } from 'astro';
import { SITE } from '../config/site.ts';
import { getPublishedPosts, postPath } from '../lib/blog.ts';

export const prerender = true;

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();
  const items = posts
    .map((post) => {
      const url = `${SITE.url}${postPath(post)}`;
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.data.description)}</description>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
${post.data.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`).join('\n')}
    </item>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${SITE.name} — Vehicle Export Insights`)}</title>
    <link>${SITE.url}/blog/</link>
    <description>${escapeXml('Practical guides for B2B vehicle importers: sourcing, specification, shipping and documentation.')}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
