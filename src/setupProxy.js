
const proxy = require('http-proxy-middleware');

module.exports = function(app){
	app.use(proxy('/CategoryOpt',{
		target: 'http://weixin.m.yiguo.com',
		host:'weixin.m.yiguo.com',
		changeOrigin:true 

	})
	);
	app.use(proxy('/api',{
		target: 'http://preh5homeapi.yiguo.com',
		host:"preh5homeapi.yiguo.com",
		changeOrigin:true 
	}));

	app.use(proxy('/gateway', { 
		target: 'https://m.maizuo.com',
		host:"m.maizuo.com",
		changeOrigin:true 
	}));
}

// http://preh5homeapi.yiguo.com/api/Template/GetTemplate
// http://weixin.m.yiguo.com/CategoryOpt/GetCategory
// http://article.m.yiguo.com/Category/GetListByGlobalType
// http://weixin.m.yiguo.com/CategoryOpt/GetCategory
// http://preh5homeapi.yiguo.com/api/Template/GetTemplate