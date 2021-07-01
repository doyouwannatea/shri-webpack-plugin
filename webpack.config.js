const path = require('path')
const SHRIWebpackPlugin = require('./webpack-plugin/SHRIWebpackPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    dist: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
    HTMLTemplate: path.resolve(__dirname, 'src', 'index.html')
}

/**
 * @type import('webpack').Configuration
 */
const config = {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        paths.entry
    ],
    output: {
        path: paths.dist,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js?x)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        contentBase: paths.dist
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.HTMLTemplate
        }),
        new SHRIWebpackPlugin({
            outputFile: 'unused.json',
            src: paths.src,
            include: /\.(js|jsx|css|scss)$/
        })
    ]
}

module.exports = config