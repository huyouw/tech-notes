// 全局的一些配置
export default {
    rootPath: '/tech-notes', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
    port: 8080, // 本地开发服务器的启动端口
    domain: 'zero-ting.github.io/tech-notes', // 站点部署域名，无需协议和path等
    defaultSearch: 'google', // 默认搜索引擎，baidu或者google
    defaultLanguage: 'zh-cn',
    'en-us': {},
    'zh-cn': {
        pageMenu: [
            {
                key: 'home',
                text: '首页',
                link: '/zh-cn/index.html',
            },
            {
                key: 'blog',
                text: '博客',
                link: '/zh-cn/blog/index.html',
            },
            /* {
               key: 'tags',
               text: '标签',
               link: '/zh-cn/community/index.html',
             },*/
            {
                key: 'about',
                text: '关于我',
                link: '/zh-cn/docs/demo1.html',
            },
        ],
        disclaimer: {
            title: '免责声明',
            content: '免责声明的具体内容',
        },
        documentation: {
            title: '文档',
            list: [
                {
                    text: '概览',
                    link: '/zh-cn/docs/demo1.html',
                },
                {
                    text: '快速开始',
                    link: '/zh-cn/docs/demo2.html',
                },
                {
                    text: '开发者指南',
                    link: '/zh-cn/docs/dir/demo3.html',
                },
            ],
        },
        resources: {
            title: '资源',
            list: [
                {
                    text: '博客',
                    link: '/zh-cn/blog/index.html',
                },
                {
                    text: '社区',
                    link: '/zh-cn/community/index.html',
                },
            ],
        },
        copyright: 'Copyright © 2019. Contact: 1009852333@qq.com',
    },
};
