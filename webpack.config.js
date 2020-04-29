var path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
var buildPath = './dist'

module.exports = {
        target: 'node',
        externals: [nodeExternals()],   
    node: {
        fs: 'empty'
      },
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"],}
            },
            {
                    test: /\.css$/i,
                    use: [
                      // The `injectType`  option can be avoided because it is default behaviour
                      { loader: 'style-loader', options: { injectType: 'styleTag' } },
                      'css-loader',
                    ],
                  },
            {
                  test: /\.(svg)$/,
                  use: [{
                    loader: 'babel-loader'
                  }, {
                    loader: 'react-svg-loader'
                  }]
                }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx', '.es6'] },
    output: {
        path: path.resolve(__dirname, buildPath),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, buildPath),
        port: 3000,
        writeToDisk: true,
        publicPath: 'http://localhost:3000/dist',
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
        new webpack.HotModuleReplacementPlugin({template: './src/index.html'})
    ]    
};
