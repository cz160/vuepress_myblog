const navConf = require('./config/navConf');
const headConf = require('./config/headConf');
module.exports = {
  title: '小昭成长记录',
  description: '小昭的个人博客',
  head: headConf,
  themeConfig: {
    logo: '/assets/img/logo.jpg',
  },
  themeConfig: {
    lastUpdated: '更新时间', 
    nav: navConf,
    sidebar: {
      '/vue/':[
        'one',
        'two'
      ],
    },
  }
}