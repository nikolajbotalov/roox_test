/* eslint-disable no-undef */
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

const filename = (ext) =>
	isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
	context: path.resolve(__dirname, "src"),
	mode: "development",
	entry: "./index.tsx",
	output: {
		filename: `./js/${filename("js")}`,
		path: path.resolve(__dirname, "app"),
		publicPath: "/",
	},
	devServer: {
		open: true,
		compress: true,
		hot: true,
		port: 3000,
		historyApiFallback: true,
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, "public/index.html"),
			filename: "index.html",
			minify: {
				collapseWhitespace: isProd,
			},
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: `./css/${filename("css")}`,
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "html-loader",
			},
			{
				test: /\.tsx?$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: isDev,
						},
					},
					"css-loader",
				],
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: (resourcePath, context) => {
								return path.relative(path.dirname(resourcePath), context) + "/";
							},
						},
					},
					{ loader: "css-modules-typescript-loader" },
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								"@babel/preset-env",
								"@babel/preset-react",
								"@babel/preset-typescript",
							],
						},
					},
				],
			},
			{
				test: /\.(?:pdf|gif|png|jpg|jpeg|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: `./img/${filename("[ext]")}`,
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: `./fonts/${filename(".[ext]")}`,
						},
					},
				],
			},
		],
	},
};
