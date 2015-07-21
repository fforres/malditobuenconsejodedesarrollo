'use strict';
var webpack = require('webpack'),
    path = require('path');
// PATHS
var PATHS = {
    app: __dirname + '',
};
module.exports = {
    // config goes here
    context: PATHS.app,
    entry: {
        app: ['webpack/hot/dev-server','./index.js']
    },
    devtool: 'eval',
    output: {
        path: PATHS.app,
        publicPath: './build/',
        filename: 'bundle.js',
        pathinfo: true
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {}
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ]
};
