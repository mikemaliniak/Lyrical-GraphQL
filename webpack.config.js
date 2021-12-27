const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./client/index.js",
	output: {
		path: "/",
		filename: "bundle.js",
	},
	stats: {
		colors: true,
		chunks: false,
		hash: false,
		version: false,
		timings: false,
		assets: false,
		children: false,
		source: false,
		warnings: true,
		noInfo: true,
		contentBase: "./dist",
		hot: true,
		modules: false,
		errors: true,
		reasons: true,
		errorDetails: true,
	},
	module: {
		rules: [
			{
				use: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/,
			},
			{
				use: ["style-loader", "css-loader"],
				test: /\.css$/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: "client/favicon.ico",
			template: "client/index.html",
		}),
	],
};
