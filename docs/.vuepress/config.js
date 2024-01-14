import { defaultTheme } from 'vuepress'

export default {
  lang: 'zh-CN',
  title: 'zhanyd的博客',
  description: '欢迎来到zhanyd的博客',
  theme: defaultTheme({
    // 在这里进行配置
    navbar: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      },
      {
        text: '网络',
        link: '/network/',
      },
      {
        text: '设计模式',
        link: '/designPatterns/',
      },
    ],
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/network/': [
        {
          text: '网络',
          children: [
              {
                text: '攻防演练思考',
                link: '/network/攻防演练思考.md',
              },
              {
                text: '网络安全实战攻防演练丨防守方案经验分享',
                link: '/network/网络安全实战攻防演练丨防守方案经验分享.md',
              }
            ],
        },
      ],
      '/designPatterns/': [
        {
          text: '设计模式',
          
          children: [
              {
                text: 'jsnop劫持漏洞的原理和防御',
                link: '/designPatterns/jsnop劫持漏洞的原理和防御.md',
              }
          ],
        },
      ],
    },    

  }),
}