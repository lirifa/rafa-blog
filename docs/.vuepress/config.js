module.exports = {
    title: 'Rafa的博客',
    description: '专注前端技术栈分享',
    head: [
        // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: `/rafa_favicon.ico` }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'manifest', href: '/manifest.json' }], //增加manifest.json
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/rafa-blog/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        editLinks: true,  // 启用编辑
        editLinkText: '在 GitHub 上编辑此页', // 编辑按钮的 Text
        docsDir: 'docs',  // 编辑文档的所在目录
        docsBranch: 'develop',  // 编辑文档的所在分支
        nav: [
            { text: '主页', link: '/' },
            { text: 'web',
                items: [
                    { text: "vue", link:"/web/vue/"},
                    { text: "js", link:"/web/js/"},
                    { text: "css", link:"/web/css/"}
                ]
            },
            { text: "node", link: "/node/" },
            { text: "python", link: "/python/" }
        ],
        sidebar: 'auto'
    },
    plugins: [
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'CK7xE9lScrPXgwCaUTRiyNBO-gzGzoHsz',
                    appKey: '4Qaw5Pxyy82pXmo1E7RdiI6e'
                }
            }
        ],
        ["@vuepress/back-to-top"], // 返回顶部
        ["@vuepress/nprogress"],   // 加载进度条
        '@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }
    ]
}

