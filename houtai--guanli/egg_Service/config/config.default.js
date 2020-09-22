//设置cookie加密的盐
exports.keys = "sdfdshlkfdsakdfsahdsfakjfhasfkdsa";

//设置可以文件上传
exports.multipart = {
	mode: 'file',
};

//两个功能，1支持post请求，2支持文件上传
exports.security = {
	csrf: {
		enable: false,
		ignoreJSON: true
	}
};

//大文件上传时，要在multipart中配置上传文件最大值，本示例配置成以下,有缺省值，所以可以不配置
exports.multipart = {
	mode: 'file',
	fileSize: 1048576000,
};

//设置端口号, 有缺省值，所以可以不配置
exports.cluster = {
	listen: {
		port: 7001
	}
};

//设置跨域
exports.cors = {
	origin: '*',
	allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};

exports.mysql = {
	client: {
		host: 'localhost',//连接名，一般都写localhost
		port: '3306',//端口号一般也固定为3306
		user: 'root',//用户名，安装数据库时一般也是使用的root
		password: '123',//自己安装数据库时设置的密码
		database: 'perfume age',//本次要用的数据库名称
	},
};

exports.multipart = {
	mode: 'file',
	fileExtensions: ['.txt'],
};
exports.security = {//post要用的，不设置post请求会失败（文件上传也需要设置）
	csrf: {
		enable: false,
		ignoreJSON: true
	}
};

exports.cors = {
	origin: '*',
	allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',

};
exports.cluster = {
	listen: {
		port: 7001,
		// hostname: '192.168.6.11'
		hostname: 'localhost'
	}
};