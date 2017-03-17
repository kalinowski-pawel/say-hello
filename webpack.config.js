var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: __dirname + "/",
    entry: {
        app: ["./src/index.tsx"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "build")
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
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
};