// var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './app/src/app',
        style: './app/src/style'
    },
    output: {
        path: './app/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                text: /.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.jpg$|\.png$/, loader: 'url?limit=1&name=img/[name].[ext]' }
        ]
    },
    resolve: {
        root: path.join(__dirname, 'src'),
        extensions: ['', '.ts', '.js', '.json', '.less', '.jpg', '.png'],
        alias: { // 设置别名

        }
    },
    // eslint: {
    //     configFile: './.eslintrc'
    // },
    externals: {
        'jQuery': 'jQuery'
    }
};