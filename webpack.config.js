const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    devServer: {
        historyApiFallback: true,
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        publicPath: "https://daniilievtukhov.github.io/backendless-app",
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
        // loaders: [
        //     {
        //         test: /\.css$/,
        //         loader: "style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]",
        //     },
        // ],
    },
};
