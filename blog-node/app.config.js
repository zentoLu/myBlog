/**
 * App config module.
 * @file 应用运行配置
 * @module app.config
 * @author biaochenxuying <https://github.com/biaochenxuying>
 */

const path = require('path');
const { argv } = require('yargs');
// const package = require('package')

exports.APP = {
	LIMIT: 10,
	PORT: 8000,
	ROOT_PATH: __dirname,
	NAME: 'biaochenxuying',
	URL: 'http://biaochenxuying.cn/main.html',
	FRONT_END_PATH: path.join(__dirname, '..', 'biaochenxuying'),
};

exports.CROSS_DOMAIN = {
	allowedOrigins: [
		'http://biaochenxuying.cn/main.html',
		'http://biaochenxuying.cn',
		'https://github.com/biaochenxuying',
	],
	allowedReferer: 'biaochenxuying',
};

exports.MONGODB = {
	uri: `mongodb://172.17.0.1:${argv.dbport || '27017'}/blogNode`,
	username: argv.db_username || 'DB_username',
	password: argv.db_password || 'DB_password',
};
exports.AUTH = {
	data: argv.auth_data || { user: 'root' },
	jwtTokenSecret: argv.auth_key || 'blog-node',
	defaultPassword: argv.auth_default_password || 'root',
};

exports.EMAIL = {
	account: argv.email_account || 'your email address like : i@biaochenxuying',
	password: argv.email_password || 'your email password',
	from: 'https://github.com/biaochenxuying',
	admin: 'biaochenxuying',
};

exports.AKISMET = {
	key: argv.akismet_key || 'your akismet Key',
	blog: argv.akismet_blog || 'your akismet blog site, like: http://biaochenxuying.cn/main.html',
};

exports.GITHUB = {
	username: 'biaochenxuying',
};

exports.ALIYUN = {
	ip: argv.aliyun_ip_auth,
};

exports.BAIDU = {
	site: argv.baidu_site || 'your baidu site domain like : biaochenxuying',
	token: argv.baidu_token || 'your baidu seo push token',
};

exports.QINIU = {
	accessKey: argv.qn_accessKey || 'your access key',
	secretKey: argv.qn_secretKey || 'your secret key',
	bucket: argv.qn_bucket || 'your bucket name',
	origin: argv.qn_origin || 'http://nodepress.u.qiniudn.com',
	uploadURL: argv.qn_uploadURL || 'http://up.qiniu.com/',
};

exports.INFO = {
	// name: package.name,
	// version: package.version,
	// author: package.author,
	// site: exports.APP.URL,
	github: 'https://github.com/biaochenxuying',
	powered: ['react', 'Nodejs', 'MongoDB', 'Express', 'Nginx'],
};
