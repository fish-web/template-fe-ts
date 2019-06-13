import * as path from "path";
import webpack from "webpack";

import HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * 使用js编写webpack的配置文件 === 自虐
 *
 * 以src/index.ts为入口，以./index.html为模板
 * 将项目编译到dist文件下
 */
const config: webpack.Configuration = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    // 处理文件的后缀名
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    // 第三方loader
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
        }],
    },
    devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
    plugins: [
    ],
};
config.plugins = [];

/**
 * 将我们的js代码直接链接到这个模板html文件中的插件
 */
const htmlPlugin = new HtmlWebpackPlugin({
    template: "./public/index.html",
});
config.plugins.push(htmlPlugin);

export default config;
