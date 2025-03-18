// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" })
    ],
    module: {
        rules: [
            {
                // for handling css
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                // handling images in html
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                // handling images and videos
                test: /\.(png|svg|jpg|jpeg|gif|webm|mp4|ogg)$/i,
                type: "asset/resource",
            },
        ],
    },
};