/**
 * 顶部菜单栏配置
 */
module.exports = [
  { text: '主页', link: '/' },
  { 
    text: '前端',
    items:[
      { text: 'js', link: '/js/one' },
      { text: 'vue', link: '/vue/one' },
      { text: 'react', link: '/react/one' },
    ] 
  },
  { text: '关于我', link: '/about/' },
  { text: 'Github', link: 'https://github.com/cz160' },
]