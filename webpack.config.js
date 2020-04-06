const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const merge = require('webpack-merge');
// const common = require('./webpack.config.js');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, './dist/'),
        publicPath: './dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, './public/'),
        port: 3000,
        writeToDisk: true,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.HotModuleReplacementPlugin({template: './public/index.html'})
    ]    
};
