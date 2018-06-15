const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        'app': [
            'webpack-hot-middleware/client?reload=true',
            './client/index.js'
        ]
    },
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg|otf)$/i,
                loaders: [
                    'file-loader?name=[name].[ext]',
                    'image-webpack-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            title: 'bigpanda',
            favicon: 'favicon.ico',
            appMountId: 'root',
            mobile: true,
            links: [
                'https://fonts.googleapis.com/css?family=Roboto'
            ]
        }),
        new ExtractTextPlugin("style.css")
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./client'),
            path.resolve('./client/components'),
            path.resolve('')
        ]
    }
}