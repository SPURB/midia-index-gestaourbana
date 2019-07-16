const path = require('path');
const package = require('./package.json')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = require( './config.json' );

// Naming and path settings
let appName = 'app';

let entryPoint = { admin: './assets/src/admin/main.js' }

// List dependencies from package.json and add to entryPoint
package.dependencies ? entryPoint['vendor'] = Object.keys(package.dependencies) : false;

let exportPath = path.resolve(__dirname, './assets/js');
const env = process.env.WEBPACK_ENV;

// Differ settings based on production flag
if (env === 'production') {
	appName = '[name].min.js';
} else {
	appName = '[name].js';
}

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
		],
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					chunks: "all"
				}
			}
		}
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
		new VueLoaderPlugin(), // add vue loader plugin
		new MiniCssExtractPlugin({ filename: "../css/[name].css" }),
		new BrowserSyncPlugin({
			proxy: {
				target: config.proxyURL
			},
			files: [
				'**/*.php'
			],
			reloadDelay: 10
		}),
		new OptimizeCSSAssetsPlugin({
			cssProcessorOptions: {
				safe: true,
				map: {
					inline: false
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
				loader: 'vue-loader'
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
	},
}
