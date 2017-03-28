var path = require("path");
var webpack = require("webpack");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    context: __dirname + "/",
    entry: {
        app: ["./src/index.tsx"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
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
                    "babel-loader",
                    "ts-loader"
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
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: {
                baseDir: './'
            },
            ui: false,
            online: false,
            notify: false
        })
    ],
};