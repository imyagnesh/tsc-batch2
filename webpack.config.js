const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: "main.js"
    },
    mode: 'development',
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: "index.html"
    })],
}