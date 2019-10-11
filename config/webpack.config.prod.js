const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        filename: 'main-[contenthash:6].js',
        path: path.resolve(__dirname, '../', 'build/js')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)/,
                loader: 'file-loader',
                options: {
                    outputPath: '../img'
                }
            },
            {
                test: /\.(eot|ttf|woff)/,
                loader: 'file-loader',
                options: {
                    outputPath: '../fonts'
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(__dirname, '../', 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '../css/[name]-[contenthash:6].css'
        })
    ]
}