const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = require( './config.json' );

// Naming and path settings
var appName = 'app';
var entryPoint = {
	admin: './assets/src/admin/main.js'
	// vendor: Object.keys(package.dependencies),
};

var exportPath = path.resolve(__dirname, './assets/js');

// Enviroment flag
var plugins = [];

const env = process.env.WEBPACK_ENV;

// add vue loader plugin
const vueLoaderPlugin = new VueLoaderPlugin()
plugins.push(vueLoaderPlugin);

function isProduction() {
	return process.env.WEBPACK_ENV === 'production';
}

// extract css into its own file
const extractCss = new MiniCssExtractPlugin({
	filename: "../css/[name].css",
});

plugins.push( extractCss );

plugins.push(new BrowserSyncPlugin( {
	proxy: {
		target: config.proxyURL
	},
	files: [
		'**/*.php'
	],
	cors: true,
	reloadDelay: 0
} ));

// Compress extracted CSS. We are using this plugin so that possible
// duplicated CSS from different components can be deduped.
plugins.push(new OptimizeCSSAssetsPlugin({
	cssProcessorOptions: {
		safe: true,
		map: {
			inline: false
		}
	}
}));

// Differ settings based on production flag
if ( isProduction() ) {
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
		// splitChunks: {
		// 	cacheGroups: {
		// 		vendor: {
		// 		test: /[\\/]node_modules[\\/]/,
		// 		name: "vendor",
		// 		chunks: "all"
		// 		}
		// 	}
		// }
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

	plugins,

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
