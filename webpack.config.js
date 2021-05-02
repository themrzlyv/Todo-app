const HtmlPlugin = require("html-webpack-plugin")
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require("dotenv-webpack")

const clientConfig = {
    mode: process.env.NODE_ENV || 'development',
    entry: "./src/index.tsx",
    devtool: 'inline-source-map',
    devServer: {
        port: process.env.PORT || 3000,
        open: true,
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:3050'
        }
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                options: {
					configFile: 'tsconfig.client.json'
				},
                loader: "ts-loader"
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                    loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: "index.html",
            template: "./public/index.html"
        }),
        new MiniCssExtractPlugin(),
        new Dotenv()
    ]
}


module.exports = [clientConfig]