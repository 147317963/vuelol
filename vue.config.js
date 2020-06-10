const webpack = require("webpack");
const path = require('path');
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, './src'))
            //.set('mui', path.resolve(__dirname, './src/assets/js/mui.js'))
    },
    devServer: {
        proxy: {

            // detail: https://cli.vuejs.org/config/#devserver-proxy
            '/v2/': {
                target: `https://cfgameinfo.raybet.ai/`,
                changeOrigin: true,
                // pathRewrite: {
                //     '^/' : ''
                // }
            },
            '/': {
                target: `http://www.llgj.com/`,
                changeOrigin: true,
                // pathRewrite: {
                //     '^/' : ''
                // }
            }
        }
    },
    //configureWebpack 是Vue CLI3.0 中用于配置 webpack 插件参数的地方，你在这里设置，会新建或者覆盖 webpack 默认配置。
    //webpack ProvidePlugin 的含义是创建一个全局的变量，使这个变量在 webpack 各个模块内都可以使用。这里的配置含义是创建 '$'、'jQuery'、'window.jQuery' 三个变量指向 jquery 依赖，创建 'Popper' 变量指向 popper.js 依赖。
    // configureWebpack: {
    //     plugins: [
    //         new webpack.ProvidePlugin({
    //             $: 'jquery',
    //             jQuery: 'jquery',
    //             // mui: "mui",
    //             'window.jQuery': 'jquery',
    //             // "window.mui": "mui",
    //             // Popper: ['popper.js', 'default']
    //         })
    //     ]
    // },
    // configureWebpack: config => {
    //     require('vux-loader').merge(config, {
    //         options: {},
    //         plugins: ['vux-ui']
    //     })
    // },
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    // require("postcss-px-to-viewport")({
                    //     rootValue: 32, // 换算的基数(设计图750的根字体为32)
                    //     unitToConvert: 'px', //将要转化的单位
                    //     viewportWidth: 375,
                    //     // viewportHeight: 1334,
                    //     unitPrecision: 3,
                    //     viewportUnit: "vw",
                    //     selectorBlackList: [
                    //         ".ignore",
                    //         ".hairlines"
                    //     ],
                    //     minPixelValue: 1,
                    //     mediaQuery: false
                    // }),
                    require("autoprefixer")({
                        overrideBrowserslist: ['Android >= 4.0', 'iOS >= 8']
                    }),

                ]
            },
            less: {
                // modifyVars: {
                //     // 直接覆盖变量
                //     'text-color': '#111',
                //     'border-color': '#eee',
                //     // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                //     // hack: `true; @import "your-less-file-path.less";`,
                // },
            },
        },

    },
};
