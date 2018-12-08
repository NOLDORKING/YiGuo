
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
	app.use(proxy('/ProductOpt',{
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
	})
	);
	app.use(proxy('/CartOpt',{
		target: 'http://weixin.m.yiguo.com',
		host:'weixin.m.yiguo.com',
		changeOrigin:true,
		headers:{'Cookie': 'CityCSS=UnitId=1&AreaId=7bc089fd-9d27-4e5f-a2e1-65907c5a5399&UnitName=%e4%b8%8a%e6%b5%b7; ASP.NET_SessionId=21sbcyfm4krknsnsszs5usta; UM_distinctid=1677714fe392c-0dab4ead0bffe7-3a3a5c0e-fa000-1677714fe3a1e9; __utmc=148382015; ygm_visit={"MobileOS":"android","HostName":"weixin.m.yiguo.com","Anchor":{"AnchorPageKey":null,"AnchorId":null,"AnchorCode":null,"PageIndex":0,"PageSize":0,"Sort":null},"CreateTime":"2018-12-04T10:38:49.2106559+08:00","Version":"1.0","WebsiteId":"yiguo.com"}; ygm_cart={"Commoditys":[],"CreateTime":"2018-12-04T10:38:49.6185242+08:00","Version":"1.0","WebsiteId":"yiguo.com"}; __ygactfp3=9481f1cf696cd105d8e690632e49db6c; h5_city={"Default":0,"Version":"2.0","Id":"eabbe02f-59e0-46e6-90e7-cd8a89dbb98f","Name":"%E5%8C%97%E4%BA%AC","Code":2,"DId":"c1153b9b-b21e-4761-9daf-99735a87f8d8","DName":"%E6%9C%9D%E9%98%B3%E5%8C%BA"}; ygm_city={"Default":0,"Version":"1.0","Id":"eabbe02f-59e0-46e6-90e7-cd8a89dbb98f","Name":"%E5%8C%97%E4%BA%AC","Code":2}; gr_user_id=445b1429-e928-4dee-aeae-6efb66de3d41; __utma=148382015.1193429100.1543891125.1543891125.1543900857.2; __utmz=148382015.1543900857.2.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; cn_1915ef989c5aence66fa_dplus=%7B%22distinct_id%22%3A%20%221677714fe392c-0dab4ead0bffe7-3a3a5c0e-fa000-1677714fe3a1e9%22%2C%22sp%22%3A%20%7B%22ygm_website%22%3A%20%22www.yiguo.com%22%2C%22ygm_group%22%3A%20%22%22%2C%22ygm_title%22%3A%20%22%E6%98%93%E6%9E%9C%E7%94%9F%E9%B2%9CYiguo%E7%BD%91_%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89_%E7%94%9F%E9%B2%9C%E6%9E%9C%E8%94%AC%20%E5%93%81%E8%B4%A8%E9%A3%9F%E6%9D%90_%E6%98%93%E6%9E%9C%E7%BD%91yiguo.com%22%2C%22ygm_host%22%3A%20%22www.yiguo.com%22%2C%22%24recent_outside_referrer%22%3A%20%22www.baidu.com%22%2C%22%24_sessionid%22%3A%200%2C%22%24_sessionTime%22%3A%201543900858%2C%22%24dp%22%3A%200%2C%22%24_sessionPVTime%22%3A%201543900858%7D%2C%22initial_view_time%22%3A%20%221543891068%22%2C%22initial_referrer%22%3A%20%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3Dg4wDtl_jAEF_icm212Kvnj4wZa9IOZ4eDY2XLmc_F0C%26wd%3D%26eqid%3D904d539100009eed000000035c05e8ad%22%2C%22initial_referrer_domain%22%3A%20%22www.baidu.com%22%7D; ygm_user=n7Xj31jgV2WTTJjIEgUC2IhP+NxzzvVsW4+U6FOsNxW/dDUPTgEuKmFECSAlEzSatWh+sJjnVGaPOpoc2Zj2NE8uQ68aKQjBi0aM/8Szpzu/yLwf3TfspQo6by4xn4UQ6oTK156k36q/OwGkfhBA/XZ+LsjxV5MZQgPRC22PgTU=; ygm_popup2=86c58a34-1528-48b0-81ab-fdc442069d712018-12-6; h5_cart={"Commoditys":[{"Id":"9d96ff43-fcdc-48be-91d3-5ccd4d7d193e","Code":"1372760","Amount":2,"GId":"2","PId":null,"Action":0,"Selected":1}],"CreateTime":"2018-12-07T13:47:47.3959617+08:00","Version":"2.0","WebsiteId":"yiguo.com"}; __storejs__=%22__storejs__%22; CNZZDATA1255872451=419227812-1543890302-null%7C1544160964; __xsptplusUT_611=1; gr_session_id_924b3e14d69b338f=cbf49676-bdd3-45b3-9cf5-0dd2db29988c; __xsptplus611=611.13.1544165083.1544165083.1%234%7C%7C%7C%7C%7C%23%23w8_uCxu8OGp2B5QadE89d8Q0mjMTIFBa%23; gr_session_id_924b3e14d69b338f_cbf49676-bdd3-45b3-9cf5-0dd2db29988c=true; cn_1255872451_dplus=%7B%22distinct_id%22%3A%20%221677714fe392c-0dab4ead0bffe7-3a3a5c0e-fa000-1677714fe3a1e9%22%2C%22sp%22%3A%20%7B%22ygm_website%22%3A%20%22weixin.m.yiguo.com%22%2C%22ygm_group%22%3A%20%22%22%2C%22ygm_title%22%3A%20%22%E8%BF%9B%E5%8F%A3%E6%B0%B4%E6%9E%9C%22%2C%22ygm_host%22%3A%20%22weixin.m.yiguo.com%22%2C%22%24recent_outside_referrer%22%3A%20%22%24direct%22%2C%22%24_sessionid%22%3A%200%2C%22%24_sessionTime%22%3A%201544165085%2C%22%24dp%22%3A%200%2C%22%24_sessionPVTime%22%3A%201544165085%7D%2C%22initial_view_time%22%3A%20%221543890302%22%2C%22initial_referrer%22%3A%20%22%24direct%22%2C%22initial_referrer_domain%22%3A%20%22%24direct%22%7D'

	   }
	})
	);

	
}

// http://preh5homeapi.yiguo.com/api/Template/GetTemplate
// http://weixin.m.yiguo.com/CategoryOpt/GetCategory
// http://article.m.yiguo.com/Category/GetListByGlobalType

