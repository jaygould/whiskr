const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
	filename: './dist/bundle.css',
	disable: process.env.NODE_ENV === 'development'
});

module.exports = {
	entry: ['./js/main.js', './sass/main.scss'],
	output: {
		filename: './dist/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
				// use: [
				// 	{
				// 		loader: 'style-loader'
				// 	},
				// 	{
				// 		loader: 'css-loader'
				// 	},
				// 	{
				// 		loader: 'sass-loader'
				// 	}
				// ]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},
	plugins: [extractSass]
};
