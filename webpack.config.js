const path = require('path');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require('terser-webpack-plugin');
const config = require( './config.json' );

// Naming and path settings
const appName = 'admin.min.js';
let entryPoint = { admin: './assets/src/admin/main.js' }

let exportPath = path.resolve(__dirname, './assets/dist');
const env = process.env.WEBPACK_ENV;

module.exports = {
	node: {
		fs: 'empty'
	},
	mode: env,
	entry: entryPoint,
	output: {
		path: exportPath,
		filename: appName,
		jsonpFunction: 'pluginWebpack'
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					ecma: 6,
					sourceMap: true,
					comments: false
				},
			}), 
			new OptimizeCSSAssetsPlugin({
				filename: `${appName}.css`,
				chunkFilename: '[id].css'
			})
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': path.resolve('./assets/src/'),
			'admin': path.resolve('./assets/src/admin/')
		},
		modules: [
			path.resolve('./node_modules'),
			path.resolve(path.join(__dirname, 'assets/src/'))
		]
	},

	plugins: [
		new webpack.DefinePlugin({ CONFIG: JSON.stringify(config) }),
		new VueLoaderPlugin(), // add vue loader plugin
		new MiniCssExtractPlugin({ filename: "../css/[name].css" }),
		new BrowserSyncPlugin({
			proxy: { target: config.proxyURL },
			files: [ '**/*.php' ],
			reloadDelay: 10
		}),
		new OptimizeCSSAssetsPlugin({
			cssProcessorOptions: {
				safe: true,
				map: {
					inline: true
				}
			}
		})
	],

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: "style-loader" }, // creates style nodes from JS strings
					{ loader: "css-loader" }, // translates CSS into CommonJS
					{ loader: "sass-loader" }, // compiles Sass to CSS, using Node Sass by default
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-env']
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					extractCSS: true
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' }, 
					{ loader: 'css-loader' },
					{ loader: "vue-style-loader" },
					{ loader: MiniCssExtractPlugin.loader }
				],
			}
		]
	}
}
