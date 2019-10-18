const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: 'main-[contenthash:6].js'
        // publicPath: '/dist/'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main-[contenthash:6].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/svg/[name]-[contenthash:6].[ext]',
                }
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/img/[name]-[contenthash:6].[ext]',
                }
            },
            {
                test: /\.html/,
                loader: 'html-loader'
            },
            {
                test: /\.php$/,
                loader: 'file-loader',
                options: {
                    name: 'php/[name].[ext]',
                }
            },
            {
                test: /\.(eot|woff|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/fonts/[name]-[contenthash:6].[ext]'
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: './config',
                            }
                        }
                    }, 'sass-loader'
                ]
            }
        ]
    }
}