
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
        about: './src/js/about.js',
        analytics: './src/js/analytics.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].[chunkhash].js' // [name] чтобы каждому js для каждого html присваивалось имя html
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {loader: 'babel-loader'},
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                    'file-loader?name=./img/[name].[ext]',
                    {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, 
                      disable: true,
                    },
                  },
                ],
            },      
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: 'styles/[name].[contenthash].css'}),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {preset: ['default']},
            canPrint: true
       }),
        new HtmlWebpackPlugin({ 
            inject: false,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/about.html',
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/analytics.html',
            filename: 'analytics.html'
        }),
        new WebpackMd5Hash()
    ]
}