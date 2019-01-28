const path =require('path');
const HtmlwebpackPlugin  = require('html-webpack-plugin');

module.exports ={
    entry: './main.js',
    output: {
        path: path.join(__dirname, '/bundle'),
        filename: 'index_bundle.js'
    },
    module:{
        rules:{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query:{
                presets: ['es2015', 'react']
            }
        }
    },
    plugins:[
        new HtmlwebpackPlugin({
            template:'./index.html'
        })
    ]
}