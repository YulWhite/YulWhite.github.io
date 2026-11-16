---
title: GitHub Pages 免费托管的边界在哪
date: 2024-11-10
description: 能做什么、不能做什么，以及国内访问不稳定时该怎么办。
category: 其他
tags: [GitHub, 笔记]
draft: false
---

GitHub Pages 只能放静态文件，这是它最大的边界。

## 能做

- HTML / CSS / JS / 图片
- 自定义域名 + 自动 HTTPS
- GitHub Actions 自动构建

## 不能做

- PHP、Node 之类的服务端代码
- 数据库
- 需要写文件的功能（评论、搜索索引）

## 国内访问

`github.io` 在国内时快时慢，介意的话可以绑自己的域名，或者换 Cloudflare Pages。
