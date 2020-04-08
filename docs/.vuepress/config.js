const navConf = require('./config/navConf');
const headConf = require('./config/headConf');
const moment = require('moment');
module.exports = {
  base:'/vuepress_myblog/',
  title: '小昭成长记录',
  description: '积小流以成江海',
  head: headConf,
  themeConfig: {
    logo: '/assets/img/logo.jpg',
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          const moment = require('moment')
          moment.locale('zh-cn')
          return moment(timestamp).fromNow()
        }
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ]
  ],
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