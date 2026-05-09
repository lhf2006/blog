export default {
  title: '我的私人博客',
  description: '记录生活，分享思考',
  base: '/blog/',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '归档', link: '/posts' },
    ],
    sidebar: [
      {
        text: '文章',
        items: [
          { text: '我的第一篇博客', link: '/posts/first-post' },
        ],
      },
    ],
    socialLinks: [],
    footer: {
      message: '私人博客 | 记录成长',
    },
  },
  lastUpdated: true,
}
