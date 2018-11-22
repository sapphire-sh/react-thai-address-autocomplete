const path = require('path');

const {
	baseConfig,
	srcPath,
	distPath,
} = require('./webpack.config.base');

module.exports = {
	...baseConfig,
	'entry': path.resolve(srcPath, 'index.tsx'),
	'module': {
		...baseConfig.module,
		'rules': [
			...baseConfig.module.rules,
			{
				'test': /\.html$/,
				'loader': 'file-loader',
				'options': {
					'name': `[name].[ext]`,
				},
			},
		],
	},
	'devServer': {
		'contentBase': distPath,
		'host': '0.0.0.0',
		'disableHostCheck': true,
		'port': 8091,
	},
};
