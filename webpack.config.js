let path = require("path");
let webpack = require("webpack");
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let WatchIgnorePlugin = require("webpack").WatchIgnorePlugin;

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    //All entry pages
    entry: {
        home: "./lib/pages/home",
        properties: "./lib/pages/properties",
        app: "./lib/pages/app"
    },
    //Output Directory and filenames
    output: {
        path: __dirname + "/scripts",
        filename: "[name].bundle.js",
    },
    //Outputs common imports into one file
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2,
        }),
        new webpack.ProvidePlugin({
            'd3': 'd3',
        }),
        new ExtractTextPlugin('stylesheets/[name].css'),
        new WatchIgnorePlugin([
            path.resolve(__dirname, './scripts/'),
        ]),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|scripts)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }],
        }, {
            test: /\.(sass|scss)$/,
            loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: "css-loader!sass-loader",
            })
        },{
            test: /\.html$/,
            use: ['wc-loader'],
        }]
    }
};
