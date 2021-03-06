/*jslint node:true, nomen: true*/
var HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: ['./app/index.js'],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            }
        ]
    },
    output: {
        filename: "index_bundle.js",
        path: __dirname + '/dist'
    },
    plugins: [HTMLWebpackPluginConfig,
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            }
        })]
};
