import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'rux-ui',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/Button' },
    ],
  },
});
