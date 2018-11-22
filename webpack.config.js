const path = require('path');

function getEnv() {
	return process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
}

const configPath = path.resolve(__dirname, 'configs', `webpack.config.${getEnv()}`);
const config = require(configPath);

module.exports = config;
