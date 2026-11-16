import { defineConfig } from 'astro/config';

// 部署到 https://<用户名>.github.io 时，把 site 换成你的地址。
// 如果是项目仓库（https://<用户名>.github.io/<仓库名>/），再取消 base 注释并填仓库名。
export default defineConfig({
  site: 'https://yulwhite.github.io',
  // base: '/repo-name',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
