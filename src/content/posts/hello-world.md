---
title: 从零搭一个自己的网站
date: 2026-11-16
description: 域名、托管、备案、HTTPS，第一次建站时没人告诉我的那些事。
category: 建站
tags: [笔记, 部署]
draft: false
---

这是第一篇文章，可以在 `src/content/posts/` 里复制这个文件开始写。

## 建站要准备什么

1. 一个域名
2. 一个托管的地方
3. 一份能打开的内容

## 最小可用方案

纯静态站 + GitHub Pages，成本只有一个域名。

```bash
npm run build
```

生成的 `dist/` 目录直接推上去就能访问。

> 写 Markdown 比改 HTML 舒服多了。
