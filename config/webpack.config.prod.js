const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: 'main-[contenthash:6].js',
    },
    devServer: {
        compress: true,
        port: 9000
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
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'public/[name]-[contenthash:6].[ext]',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 55
                            },
                            optipng: {
                                enabled: false,
                                optimizationLevel: 7
                            }
                        }
                    }
                ]
            },
            {
                test: /\.html/,
                loader: 'html-loader'
            },
            {
                test: /\.php$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'php',
                    name: '[name].[ext]',
                }
            },
            {
                test: /\.pdf$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'public',
                    name: '[name].[ext]',
                }
            },
            {
                test: /\.(eot|woff|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: 'public/[name]-[contenthash:6].[ext]'
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
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: true
                        }
                    }
                ]
            }
        ]
    }
}