module.exports = {
  title: 'ZiuChen',
  description: 'Unlimited Progress.',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    [
      'script',
      {},
      /* js */ `
      var _hmt = _hmt || [];
      (function() {
        var isDev = document.location.href.indexOf("localhost") !== -1
        var isGitee = document.location.href.indexOf("gitee.io") !== -1
        var hm1 = document.createElement("script");
        hm1.src = "https://hm.baidu.com/hm.js?08b4ef50a9244e83e5a1bd5822442829"; // gitee
        var hm2 = document.createElement("script");
        hm2.src = "https://hm.baidu.com/hm.js?50bac15a1f238d1aa61f104a5fb6f5e0"; // github
        var s = document.getElementsByTagName("script")[0];
        if(isDev) return // 不上报
        if (isGitee) s.parentNode.insertBefore(hm1, s);
        else s.parentNode.insertBefore(hm2, s);
      })();
      </script>        
    `
    ]
  ],
  plugins: [
    '@vuepress/medium-zoom',
    '@vuepress/active-header-links',
    '@vuepress/plugin-back-to-top',
    '@vuepress/last-updated',
    {
      transformer: (timestamp) => {
        const d = new Date(timestamp)
        return d.toLocaleDateString() + d.toLocaleTimeString()
      }
    }
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '开源作品',
        link: '/works/'
      },
      {
        text: '个人介绍',
        link: '/self/',
        items: [
          {
            text: '技术栈',
            link: '/self/#技术栈'
          },
          {
            text: '获得奖项',
            link: '/self/#获得奖项'
          },
          {
            text: '相关链接',
            link: '/self/#相关链接'
          }
        ]
      }
    ],
    displayAllHeaders: true,
    logo: '/logo.png',
    repo: 'ZiuChen/ZiuChen.github.io',
    editLinks: true,
    docsBranch: 'main',
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    search: false
  }
}
