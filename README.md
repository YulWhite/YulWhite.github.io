# 白榆 · Astro 静态站

从 Typecho 版迁过来的静态站：**Astro + Markdown**，外观沿用 Single 主题，右下角是 Pio 看板娘。
构建产物是纯 HTML/CSS/JS，可以直接放 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
npm run preview  # 预览构建结果
```

## 写文章

在 `src/content/posts/` 新建 `.md`，开头填 frontmatter：

```yaml
---
title: 文章标题
date: 2026-11-16
description: 列表页显示的一句话摘要
category: 建站
tags: [笔记, 部署]
draft: false
---
```

`draft: true` 的文章不会出现在列表和构建结果里。

## 目录

```
astro-site/
├── src/
│   ├── content/posts/      文章（Markdown）
│   ├── layouts/Base.astro  全局布局：导航、页脚、看板娘、背景
│   └── pages/              index / archive / about / 404 / posts/[slug]
├── public/
│   ├── static/             kico.css、single.css、kico.js、single.js、prism.js
│   ├── pio/                看板娘：l2d.js、pio.js、两个模型（witch / pio）
│   └── img/elm.svg         榆树背景
├── .github/workflows/deploy.yml
└── astro.config.mjs
```

## 部署到 GitHub Pages

1. 新建仓库（个人站就叫 `<用户名>.github.io`，项目页随便取名）。
2. 改 `astro.config.mjs`：
   - 个人站：`site: 'https://<用户名>.github.io'`
   - 项目页：再加 `base: '/<仓库名>'`
3. 推送代码到 `main`。
4. 仓库 **Settings → Pages → Source** 选 **GitHub Actions**。
5. Actions 跑完就能访问。

## 看板娘

- 引擎：Pio（Live2D Cubism 2），脚本在 `public/pio/static/`
- 模型：`public/pio/models/witch/`（默认，魔女）和 `public/pio/models/pio/`（草帽）
- 换默认形象：改 `src/layouts/Base.astro` 里 `model` 数组的顺序
- 加新模型：把模型文件夹放进 `public/pio/models/`，再往数组里加一行路径

## 背景

`public/img/elm.svg` 是手绘的榆树，通过 `body` 的 `background-image` 挂上去。
想换照片就替换这个文件，或在 `Base.astro` 的全局样式里改路径。

## 注意

- 模型和主题样式来自 Dreamer-Paul 的 Single / Pio 项目，公开使用时保留页脚署名。
- 文章里的外链、图片自己补；这个仓库里没有原站的文章内容。
- GitHub Pages 国内访问不稳定，介意就绑自己的域名或换 Cloudflare Pages。
