module.exports = {
  title: '小昭聊前端',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.jpg' }],
  ],
  themeConfig: {
    logo: '/assets/img/logo.jpg',
  },
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { 
        text: '博文',
        items:[
          { text: 'vue系列', link: '/vue/' },
          { text: 'react系列', link: '/react/' },
          { text: 'js系列', link: '/js/' }
        ] 
      },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/cz160' },
    ],
    sidebar: {
      '/vue/':[{
        title:'vue',
        collapsable: false,
        children: [
          { title: 'items01', path:'/vue/one/'},
          { title: 'items02', path:'/vue/two/'},
        ]
      }],
    },
    sidebarDepth: 2,
    lastUpdated: '更新时间', 
  }
}