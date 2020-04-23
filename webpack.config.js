const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
            },
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx', '.es6'] },
    output: {
        path: path.resolve(__dirname, 'output'),
        publicPath: './dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'output'),
        port: 3000,
        writeToDisk: true,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            filename: './dist/index.html'}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.HotModuleReplacementPlugin({template: './public/index.html'})
    ]    
};
