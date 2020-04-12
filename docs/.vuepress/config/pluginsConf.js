/**
 * 插件配置
 */
const moment = require('moment');
const secret = require('./secret');
module.exports = {
  '@vuepress/last-updated':{
    transformer: (timestamp) => {
      moment.locale('zh-cn')
      return moment(timestamp).fromNow("LLLL")
    }
  },
  '@vuepress/pwa':{
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用",
      buttonText: "刷新"
    }
  },
  '@vuepress/back-to-top': true,
  '@vuepress/google-analytics': {
    'ga': secret.ga, 
  },
  "vuepress-plugin-auto-sidebar": {
    nav:true,
  }
}