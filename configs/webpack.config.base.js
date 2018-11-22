const path = require('path');

const webpack = require('webpack');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prod = process.env.NODE_ENV !== 'development';

const srcPath = path.resolve(__dirname, '../src');
const distPath = path.resolve(__dirname, '../dist');

exports.srcPath = srcPath;
exports.distPath = distPath;

exports.baseConfig =  {
	'entry': path.resolve(srcPath, 'ThaiAddressAutoComplete.tsx'),
	'output': {
		'path': distPath,
		'filename': `main.js`,
	},
	'module': {
		'rules': [
			{
				'test': /\.tsx?$/,
				'use': [
					'ts-loader',
				],
			},
			{
				'test': /\.s?css$/,
				'use': [
					{
						'loader': MiniCSSExtractPlugin.loader,
					},
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	'devtool': '#source-map',
	'resolve': {
		'extensions': [
			'.ts',
			'.tsx',
			'.js',
			'.json',
		],
	},
	'plugins': [
		new webpack.DefinePlugin({
			'__dev': prod === false,
		}),
		new MiniCSSExtractPlugin({
			'filename': `[name].[contenthash].css`,
		}),
		new BundleAnalyzerPlugin({
			'analyzerMode': process.env.NODE_ENV === 'analyze' ? 'server' : 'disabled',
		}),
		new webpack.ProgressPlugin(),
	],
	'mode': prod ? 'production' : 'development',
};
