const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin  = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/], // exclude: [path.resolve(__dirname, 'node_modules')]
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.less$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            strictMath: true,
                            noIeCompat: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        })
    ]
};