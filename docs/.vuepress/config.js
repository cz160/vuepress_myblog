const navConf = require('./config/navConf');
const headConf = require('./config/headConf');
const pluginsConf = require('./config/pluginsConf');
const sidebarConf = require('./config/sidebarConf');
module.exports = {
  base:'/vuepress_myblog/',
  title: '小昭成长记录',
  description: '积小流以成江海',
  head: headConf,
  themeConfig: {
    logo: '/assets/img/logo.jpg',
  },
  plugins: pluginsConf,
  themeConfig: {
    lastUpdated: '更新时间',
    nav: navConf,
    sidebar:sidebarConf, 
  }
}