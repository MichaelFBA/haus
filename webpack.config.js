var path = require("path");
var webpack = require("webpack");

module.exports = {
    //All entry pages
    entry: {
        home: "./lib/components/home-page",
        app: "./lib/app"
    },
    //Output Directory and filenames
    output: {
        path: path.join(__dirname, "dist/scripts"),
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
    //Dev Server
    devServer: {
        contentBase: path.resolve(__dirname, 'index.html'),
    },
    module: {
        rules: [{
            test: /\.js$/,
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
    }
};
