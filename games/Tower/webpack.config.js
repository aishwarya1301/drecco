const path = require("path");
var webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        },
        {
            test: /\.css$/i,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader, 
                    options: {
                        publicPath: ''
                    }
                },
                {
                    loader: "css-loader"
                }
            ],
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        }
        ]
    },
    plugins: [
        // new HtmlWebPackPlugin({
        //     hash: true,
        //     filename: "index.html",  //target html
        //     template: "./src/index.html" //source html
        // }),
        new HtmlWebPackPlugin(),
        new MiniCssExtractPlugin()
    ]
}