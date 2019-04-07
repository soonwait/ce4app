// var path = require('path');
// module.exports = {
//     entry: {
//         app: ['./index.js']
//     },
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         publicPath: '/',
//         filename: 'bundle.js'
//     }
// }
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    //...
    entry: {
        app: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: './index.html',
        //     inject: 'body'
        // })
    ],
    devServer: {
        // compress: true,
        host: '0.0.0.0',
        port: 9000,
        disableHostCheck: true
    }
};