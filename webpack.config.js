var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: __dirname + "/",
    entry: {
        app: ["./src/index.tsx"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    devtool: "source-map",
    resolve: {
        extensions: [
            ".webpack.js",
            ".web.js",
            ".ts",
            ".tsx",
            ".js"
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "ts-loader"
                    }
                ]
            },

            {
                test: /\.js$/,
                enforce: "pre",
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            "React": "react"
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],
    devServer: {
        inline: true,
        host: "localhost",
        port: 8082
    }
};