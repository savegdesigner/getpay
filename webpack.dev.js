const path = require('path')
const config = require('./webpack.config')
const merge = require('webpack-merge')
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(config, {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/template.html"
        })
    ]
})