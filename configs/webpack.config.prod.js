const webpack = require('webpack');

const {
	baseConfig,
} = require('./webpack.config.base');

module.exports = {
	...baseConfig,
	'optimization': {
		'minimize': true,
	},
	'plugins': [
		...baseConfig.plugins,
		new webpack.LoaderOptionsPlugin({
			'minimize': true,
		}),
	],
};
