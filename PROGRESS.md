# 进度记录

> 最后更新：2026-11-11

## 项目概况

- 目标：面向**海外 B2B 买家**的车辆出口官网，带询盘收集与邮件提醒
- 技术栈：Astro 5 + Cloudflare Pages + D1 + Resend + Turnstile
- 预算：域名约 ¥100/年，其余免费额度内
- 负责人基础：0 基础，代码由 AI 生成并维护

## 当前状态（2026-11-11 暂停点）

- **线上预览**：https://vehicle-export-site.pages.dev （已可访问，全链路正常）
- **GitHub**：https://github.com/Pedro11111029/vehicle-export-site （`master`，Pages 自动构建）
- **正式域名**：`usedtruk.com` 未接通
  - 注册商：阿里云 / 万网（2027-07-18 到期）
  - 当前 NS：`artemis.dns-parking.com`、`hermes.dns-parking.com`（阿里云停放，DNS 解析异常）
  - 卡点：需要在 Cloudflare 添加站点，再回阿里云把 NS 改成 Cloudflare 分配的两个 NS
- **生产 D1**：`inquiries`（WEUR，`0b1f70d0-2918-4e54-913e-e5cae46ec32c`），表已建，线上写入已验证
- **Turnstile**：线上仍用测试站点密钥（验证永远通过），真实密钥未创建
- **邮件**：Resend 未配置（询盘只入库不发信）；`Pedro@usedtruk.com` 目前收不到信，需开 Cloudflare Email Routing
- **代码状态**：工作区干净，所有改动已提交并推送到 `origin/master`

### 恢复后先做

1. Cloudflare 添加站点 `usedtruk.com` → 阿里云改 NS → 等 Active
2. Pages 绑定 `usedtruk.com` + `www`，开启 Email Routing
3. 创建 Turnstile 真实密钥、Resend 发信子域名 `send.usedtruk.com` + DMARC
4. Google Search Console 验证 + 提交 sitemap
5. 确认产品内容：域名是 `usedtruk.com`，当前产品页写的是新车三大类，需确认是否改为二手卡车为主

## 已完成

- [x] 项目骨架搭建（`C:\Users\15333\Projects\vehicle-export-site`）
- [x] 依赖安装（Node v24.14.1 / npm 11.11.0）
- [x] 8 个静态页面：首页、产品列表、3 个产品详情、About、Contact、Privacy、Terms
- [x] SEO 基础件：canonical、OG、JSON-LD（Organization/Product/FAQ/Breadcrumb）、sitemap、robots.txt
- [x] 询盘表单：Turnstile 人机验证 + 蜜罐字段 + 前端校验
- [x] 后端接口 `/api/inquiry`：D1 落库 → Resend 异步发信（通知自己 + 自动回复客户）
- [x] `schema.sql`、`wrangler.toml`、`.env.example`
- [x] 中文操作手册 `README.md`
- [x] **构建通过**（`npm run build`）
- [x] **本地接口实测通过**（首页 200 / 产品页 200 / 表单提交 `{"ok":true}`）
- [x] Git 仓库初始化 + 首次提交
- [x] **博客模块**：Astro 内容集合（`src/content/blog/*.md`）+ 列表页 `/blog/` + 文章页（目录、相关文章、BlogPosting/面包屑 JSON-LD）+ RSS `/rss.xml` + 导航入口
- [x] 3 篇示例行业文章（中国进口指南、LHD/RHD 市场指南、集装箱 vs RoRo）
- [x] 构建验证：3 篇文章页、sitemap、RSS 均正确生成
- [x] 填真实站点信息（`usedtruk.com` / Global Auto Trading / PedroZ CO., LTD. / 邮箱、电话、WhatsApp、地址）
- [x] 上线前加固：自定义 404、`_headers` 安全响应头、1200×630 OG 分享图、`.nvmrc`（Node 22）
- [x] 本地 Cloudflare 环境实测：页面 200 / 404 / 安全头 / 询盘接口 `{"ok":true}` / D1 落库
- [x] **已上线预览**：https://vehicle-export-site.pages.dev （Cloudflare Pages，GitHub `master` 自动构建）
- [x] 生产 D1 创建 + 建表（`inquiries`，区域 WEUR，`database_id = 0b1f70d0-2918-4e54-913e-e5cae46ec32c`）
- [x] 线上全链路实测：全部页面 200、404 正常、询盘写入远程 D1 成功（测试数据已清理）

## 本地预览

```powershell
cd C:\Users\15333\Projects\vehicle-export-site
npm run dev -- --host 127.0.0.1
```

打开 http://127.0.0.1:4321

> 注意：必须带 `--host 127.0.0.1`。Astro 默认只监听 IPv6 的 `[::1]`，浏览器用 IPv4 访问会提示"无法访问网页"。

## 待办

### 立即（内容层）
- [x] 填 `src/config/site.ts` 里的 TODO（域名、公司名、邮箱、电话、WhatsApp、地址）
- [ ] 把 `PRODUCTS` 三个占位分类换成真实产品（当前：Passenger Vehicles / Commercial Trucks / New Energy Vehicles；域名是 usedtruk.com，待确认是否以二手卡车为主）
- [ ] 加产品图片到 `public/images/`，在 `PRODUCTS` 里加 `image` 字段
- [x] 加 `public/og-image.jpg`（1200×630，社媒分享用，由 `scripts/make-og-image.ps1` 生成）

### 上线（基础设施）
- [x] 购买域名 `usedtruk.com`（阿里云注册，2027-07-18 到期）
- [x] `npx wrangler login`
- [x] `npx wrangler d1 create inquiries` → database_id 已填进 `wrangler.toml`
- [x] `npx wrangler d1 execute inquiries --remote --file=./schema.sql`
- [x] 推到 GitHub，Cloudflare Pages 接仓库（Build: `npm run build`，Output: `dist`）
  - 仓库：https://github.com/Pedro11111029/vehicle-export-site
  - 线上：https://vehicle-export-site.pages.dev
- [x] Pages 绑定 D1（变量名 `DB`，线上实测写入成功）
- [ ] 配置环境变量：`NODE_VERSION=22`（Pages 构建）、`PUBLIC_TURNSTILE_SITE_KEY`、`TURNSTILE_SECRET_KEY`、`RESEND_API_KEY`、`OWNER_EMAIL`、`FROM_EMAIL`
- [ ] Cloudflare Turnstile 建站点（当前线上仍用测试密钥，验证永远通过）
- [ ] Resend 验证发信子域名 `send.usedtruk.com` + 主域名加 DMARC
- [ ] Email Routing 把 `sales@usedtruk.com` 转发到私人邮箱
- [ ] **域名 DNS 迁移**：`usedtruk.com` 当前 NS 仍是阿里云停放（`dns-parking.com`，域名解析是坏的），需在 Cloudflare 添加站点后把阿里云 NS 改为 Cloudflare 分配的两个 NS
- [ ] 绑定自定义域名 `usedtruk.com` + `www`

### 上线后
- [ ] Google Search Console 验证 + 提交 sitemap
- [ ] Bing Webmaster 导入
- [ ] Cloudflare Web Analytics 开启
- [ ] PageSpeed Insights 检查 LCP < 2.5s

### 后续迭代（未做）
- [ ] 持续更新博客（每月 2–4 篇，模块已就绪）
- [ ] 多语言 `/es/`、`/fr/`、`/ar/` + hreflang
- [ ] 按 IP 频率限制（Cloudflare Rate Limiting）
- [ ] 询盘同步飞书 / Telegram 通知
- [ ] 客户 logo、工厂视频、真实团队照片

## 已做出的技术决定（避免以后重复讨论）

| 决定 | 原因 |
| --- | --- |
| 纯静态输出，只有 `/api/*` 走 Function | 海外访问快、SEO 友好、免费额度足够 |
| 产品内容集中在 `site.ts`，产品页用 `[slug].astro` 动态生成 | 增删产品不用新建文件 |
| 表单先写 D1 再 `waitUntil` 发信 | Resend 故障也不会让客户看到提交失败 |
| Resend 用子域名发信 | 避免与 Cloudflare Email Routing 的 MX 冲突，保护主域名信誉 |
| 站点不设 cookie，用 Cloudflare Web Analytics | 欧盟访客无需 cookie 同意框，省掉合规复杂度 |
| 不用 GA4 | 需配同意管理，新手阶段成本高于收益 |
| 博客用 Astro 内容集合（Markdown），`draft: true` 只本地可见 | 发文只需新建 `.md`，不碰页面代码；草稿不会误上线 |
| RSS 手写（`src/pages/rss.xml.ts`），不引第三方包 | 少一个依赖，输出可控，够用 |

## 需要注意的坑（已踩过）

1. **IPv6 only**：Astro dev 默认监听 `[::1]`，浏览器访问 `localhost` 走 IPv4 会失败 → 必须加 `--host 127.0.0.1`
2. `astro.config.mjs` 直接 import 了 `src/config/site.ts`，**改域名只改 `site.ts` 的 `url` 一处**
3. `wrangler.toml` 的 `database_id` 不填，本地能跑，线上询盘不会入库
4. `.env` 已被 `.gitignore` 排除，密钥只放 Cloudflare 后台

## Git

```powershell
git log --oneline        # 查看历史
git status               # 查看改动
git add . ; git commit -m "说明"   # 保存一次进度
```

> 提交身份当前是本地占位（Site Owner / site-owner@example.com），推 GitHub 前改成你自己的：
> ```powershell
> git config user.name "你的名字"
> git config user.email "你的GitHub邮箱"
> ```
