const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
    })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png)$/i,
                type: "asset/resource",
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    webp: {
                        quality: 75,
                    },
                }

            },
            {
                test: /\.(woff2)$/i,
                type: 'asset/resource',
            },

        ],
    },

    resolve: {
        extensions: ['.ts', '.js'],
    }
};
