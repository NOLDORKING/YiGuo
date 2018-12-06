
const proxy = require('http-proxy-middleware');

module.exports = function(app){
	app.use(proxy('/CategoryOpt',{
		target: 'http://weixin.m.yiguo.com',
		host:'weixin.m.yiguo.com',
		changeOrigin:true,
		headers:{'Cookie': 'ygm_cart={"Commoditys":[],"CreateTime":"2018-12-04T13:25:04.8239271+08:00","Version":"1.0","WebsiteId":"yiguo.com"}; UM_distinctid=16777ad7b332b-02fb55f588657f-323b5b03-fa000-16777ad7b341a6; __ygactfp3=5fbb962219f7e08418ebe98edaf5c5ca; ygm_visit={"MobileOS":"android","HostName":"weixin.m.yiguo.com","Anchor":{"AnchorPageKey":null,"AnchorId":null,"AnchorCode":null,"PageIndex":0,"PageSize":0,"Sort":null},"CreateTime":"2018-12-04T13:25:13.3099207+08:00","Version":"1.0","WebsiteId":"yiguo.com"}; gr_user_id=3d274ee7-b1fb-47c7-9267-adb8a38503bb; ASP.NET_SessionId=1v0xhwvrtqrxrh352odomo3i; h5_city={"Default":0,"Version":"2.0","Id":"312d0556-0671-4f2e-8bac-7b8873b5a03a","Name":"%E4%B8%8A%E6%B5%B7","Code":1,"DId":"825dbb3c-015a-4a19-a7be-a6bfe4aa0fe0","DName":"%E5%AE%9D%E5%B1%B1%E5%8C%BA"}; ygm_city={"Default":0,"Version":"1.0","Id":"312d0556-0671-4f2e-8bac-7b8873b5a03a","Name":"%E4%B8%8A%E6%B5%B7","Code":1}; h5_cart={"Commoditys":[],"CreateTime":"2018-12-04T21:21:40.4892101+08:00","Version":"2.0","WebsiteId":"yiguo.com"}; ygm_popup1=2493809d-5d01-406e-8e6e-5f34e0b9b0ea2018-12-5; CNZZDATA1255872451=268679187-1543895717-null%7C1543993334; __xsptplus611=611.6.1543990840.1543995286.11%234%7C%7C%7C%7C%7C%23%236yty0_pNmTNFqOD_BjoA-jPQzreR8A4f%23; cn_1255872451_dplus=%7B%22distinct_id%22%3A%20%2216777ad7b332b-02fb55f588657f-323b5b03-fa000-16777ad7b341a6%22%2C%22sp%22%3A%20%7B%22ygm_website%22%3A%20%22weixin.m.yiguo.com%22%2C%22ygm_group%22%3A%20%22%22%2C%22ygm_title%22%3A%20%22%E5%95%86%E5%93%81%E5%88%86%E7%B1%BB%22%2C%22ygm_host%22%3A%20%22weixin.m.yiguo.com%22%2C%22%24recent_outside_referrer%22%3A%20%22%24direct%22%2C%22%24_sessionid%22%3A%200%2C%22%24_sessionTime%22%3A%201543998994%2C%22%24dp%22%3A%200%2C%22%24_sessionPVTime%22%3A%201543998994%7D%2C%22initial_view_time%22%3A%20%221543895717%22%2C%22initial_referrer%22%3A%20%22%24direct%22%2C%22initial_referrer_domain%22%3A%20%22%24direct%22%7D'

	   }
	})
	);
	app.use(proxy('/api',{
		target: 'http://preh5homeapi.yiguo.com',
		host:"preh5homeapi.yiguo.com",
		headers:{
			'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
		},
		changeOrigin:true 
	}));

	
}

// http://preh5homeapi.yiguo.com/api/Template/GetTemplate
// http://weixin.m.yiguo.com/CategoryOpt/GetCategory
// http://article.m.yiguo.com/Category/GetListByGlobalType

