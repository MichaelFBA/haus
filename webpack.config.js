var path = require("path");
var webpack = require("webpack");

module.exports = {
    //All entry pages
    entry: {
        home: "./lib/pages/home",
        properties: "./lib/pages/properties",
        app: "./lib/pages/app"
    },
    //Output Directory and filenames
    output: {
        path: path.join(__dirname, "scripts"),
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
        })
    ],
    module: {
        rules: [{
            test: /\.html$/, // handles html files. <link rel="import" href="path.html"> and import 'path.html';
            use: ['wc-loader'],
            exclude: /(png|jpg|gif|svg)/,
        }, {
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
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    //Dev Server
    devServer: {
        historyApiFallback: true,
    }
};
