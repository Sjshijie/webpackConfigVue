const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                    { loader: 'vue-style-loader' },
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件来施展魔法
        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html",
            //js资源插入位置,true表示插入到body元素底部
            inject: true
        }),
    ]
};