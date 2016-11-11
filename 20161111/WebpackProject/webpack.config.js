/**
 * Created by plter on 2016/11/11.
 */

var webpack = require('webpack')

module.exports = {
    entry: './src/main.js',
    output: {
        path: `${__dirname}/build`,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
};