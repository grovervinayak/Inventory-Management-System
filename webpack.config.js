var path = require("path");
var webpack = require('webpack');
var debug = false;
var DIST_DIR = path.resolve(__dirname, "Src/dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    devtool: debug ? "inline-sourcemap" : false,
    devServer: {
      port:8080,
      proxy: {
         '/api/': {
            target: 'http://localhost:5000',
            secure: false
         }
      }
   },
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
	module: {
		loaders: [
		{
			test: /\.css$/,
			exclude: /node_modules/,
			use: ['style-loader','css-loader'],
		},
		{
			test: /\.scss$/,
			exclude: /node_modules/,
			use: ['sass-loader'],
		},
		{
			test: /\.js?/,
			include: SRC_DIR,
			loader: "babel-loader",
			query: {
				presets: ["react", "es2015", "stage-2"]
			}
		},
      { test: /\.xml$/, loader: 'xml-loader' }]
	}
};

module.exports = config;
