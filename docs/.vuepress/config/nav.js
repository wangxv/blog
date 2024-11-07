// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '开发规则',
        items: [
          { text: 'HTML&CSS', link: '/pages/64be92/' },
        ],
      },
      {
        text: '前端常用',
        items: [
          { text: '《JavaScript教程》', link: '/pages/f5afcd/' },
          { text: '《Vue》', link: '/pages/66182f/' },
          { text: '《React》', link: '/pages/599976/' },
          { text: '《Git》', link: '/pages/cc0a9c/' },
        ],
      },
      {
        text: '框架',
        items: [
          { text: '前端服务框架调研', link: '/pages/4e34eb/' },
        ],
      },
    ],
  },
  {
    text: '页面',
    link: '/ui/',
    items: [
      { text: 'HTML', link: '/pages/3a5430/' },
      { text: 'CSS', link: '/pages/493114/' },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/9b7d7c/' },
      { text: 'Nodejs', link: '/pages/73bb5b/' }
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '效率', link: '/pages/c1326e/' },
      { text: '面试', link: '/pages/f2cc3a/' },
      { text: '工具', link: '/pages/69551d/' },
    ],
  },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
