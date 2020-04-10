const navConf = require('./config/navConf');
const headConf = require('./config/headConf');
const pluginsConf = require('./config/pluginsConf');
module.exports = {
  base:'/vuepress_myblog/',
  title: '小昭聊前端',
  description: '积小流以成江海',
  head: headConf,
  themeConfig: {
    logo: '/assets/img/logo.jpg',
  },
  plugins: pluginsConf,
  themeConfig: {
    lastUpdated: '更新时间',
    nav: navConf,
  }
}