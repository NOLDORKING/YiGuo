import React,{Component} from 'react';
import {Navlink} from 'react-router-dom';
import css from './index.module.scss';
import axios from 'axios';
class Cart extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist: []
	  };

	}
	render(){
		return(
			<div className={css.cart}>
{/*---------------------头-----------------------*/}
				<div className={css.cart_express}>
					全场满100元包邮，还差
					<span className={css.red}>45.00</span>
					元包邮
				</div>
			<div className={css.cart_wrap+' '+css.pd}>
{/*---------------------添加的商品-----------------------*/}		
				<div className={css.goods}>
					<div className={css.group+' '+css.line_bottom}>
						<div className={css.one+' '+css.line_bottom}>
							<div className={css.check}>
								<i className={css.ative}></i>
							</div>
							<div className={css.img}>
								<img src="http://img11.yiguoimg.com/d/items/2018/180423/9288722024637591_300.jpg"/>
							</div>
							<div className={css.text}>
								<h2 className={css.elli2}>意大利进口Dolomia多洛米亚天然饮用水经典款1.5L</h2>
								<div className={css.tag}></div>
								<p>
									<strong className={css.red}>
										￥<b>31.8</b>
									</strong>
								</p>
							</div>
							<div className={css.del}>
								<i></i>
							</div>
							<div className={css.limit+' '+css.red}>
							</div>
							<div className={css.num}>
		                        <span className={css.cut+' '+css.line_all+' '+css.active}>
		                        	<i></i>
		                        </span>
		                        <span className={css.input+' '+css.line_bottom}>2</span>
		                        <span className={css.add+' '+css.line_all}>
		                        	<i></i>
		                        </span>
		                    </div>
						</div>
					</div>
				</div>

				<div className={css.guess+' '+css.line_bottom}>
					<div className={css.title+' '+css.line_top}>
						<h2>猜你喜欢</h2>
					</div>
					<div className={css.list+' '+css.clear}>
					{
						this.state.datalist.map(item=>
							
						<div className={css.one} key={item.CommodityId}>
							<div className={css.img}>
								<img src={item.SmallPic} key={item.CommodityId}/>
							</div>
		                    <div className={css.text}>
		                        <h2 className={css.elli2}>{item.CommodityName}</h2>
		                        <p>
		                        	<strong className={css.red}>￥<b>{item.CommodityPrice}</b></strong>
		                        </p>
		                    </div>
		                    <div className={css.btn}>
		                    	<a href="javascript:;"></a>
		                    </div>
	                	</div>
						)
                	}
					</div>
				</div>
			</div>
{/*---------------------合计-----------------------*/}
			<div className={css.cart_total+' '+css.line_top}>
		        <div className={css.check}>
			        <i></i>
			        全选
		        </div>
		        <div className={css.text}>
		            <p>合计(不含运费)：<b className={css.red}>¥63.60</b></p>
		            <span>已优惠: ¥0.00</span>
		        </div>
		        <div className={css.btn}>
		            <a href="javascript:;">去结算(2)</a>
		        </div>
			</div>
		</div>
			)
	}

	componentDidMount(){
		axios({
			url:'/CartOpt/RefreshCart?_=1544165085798',
			method:'get',
			
		}).then((res)=>{
			console.log(res.data.RspData.GuessYouLikeCommoditys);
			
			this.setState({
				datalist:res.data.RspData.GuessYouLikeCommoditys,

			})
		})
	}
}
export default Cart;


// {
// CommodityCode: "108362",
// CommodityId: "3b87649d-022f-4543-b889-3179a7b52668",
// CommodityName: "意大利进口Dolomia多洛米亚天然饮用水经典款1.5L",
// CommodityPrice: 23,
// SmallPic: "http://img11.yiguoimg.com/d/items/2018/180423/9288722024637591_300.jpg"
// },
// {
// CommodityCode: "1533980",
// CommodityId: "94d22770-0146-4875-b845-1a0467a52e08",
// CommodityName: "四川爱媛蜜柑1kg约100g/个",
// CommodityPrice: 29.9,
// SmallPic: "http://img12.yiguoimg.com/d/items/2018/181017/9288732709823825_300.jpg"
// },
// {
// CommodityCode: "1372760",
// CommodityId: "9d96ff43-fcdc-48be-91d3-5ccd4d7d193e",
// CommodityName: "Zespri佳沛新西兰阳光金奇异果6个92-114g/个",
// CommodityPrice: 49.9,
// SmallPic: "http://img11.yiguoimg.com/d/items/2018/180808/9288728016889096_300.jpg"
// },
// {
// CommodityCode: "1522963",
// CommodityId: "fb258394-3032-4d3c-a8d4-e74454d5c3e0",
// CommodityName: "福建琯溪白心蜜柚2个约1kg/个",
// CommodityPrice: 11,
// SmallPic: "http://img11.yiguoimg.com/d/items/2018/180817/9288729490531601_300.jpg"
// },
// {
// CommodityCode: "106252",
// CommodityId: "24942cf2-0678-4960-8325-f974fcc730aa",
// CommodityName: "原膳南美白虾仁（中）250g",
// CommodityPrice: 32.9,
// SmallPic: "http://img14.yiguoimg.com/d/items/2017/171130/9288715872871294_300.jpg"
// },
// {
// CommodityCode: "1307540",
// CommodityId: "38a38458-ffab-45ab-b90f-aa0d26321e4c",
// CommodityName: "越南红心火龙果2个(大果)410g以上/个",
// CommodityPrice: 29.9,
// SmallPic: "http://img11.yiguoimg.com/d/items/2018/180808/9288727987594504_300.jpg"
// },
// {
// CommodityCode: "1314608",
// CommodityId: "95428cf9-8a30-4c9e-a7c5-df6b4a78b205",
// CommodityName: "四川大凉山丑苹果6个果径80mm以上",
// CommodityPrice: 29.9,
// SmallPic: "http://img10.yiguoimg.com/d/items/2018/180903/9288730540877091_300.jpg"
// },
// {
// CommodityCode: "1518574",
// CommodityId: "ae4a80dc-3b34-4728-85be-dec60d354cad",
// CommodityName: "云南蒙自石榴6个约225g/个",
// CommodityPrice: 35.8,
// SmallPic: "http://img11.yiguoimg.com/d/items/2018/180808/9288728018429192_300.jpg"
// },
// {
// CommodityCode: "1531127",
// CommodityId: "0d45bf0b-2bd0-4bba-80b7-075e3b64b1fc",
// CommodityName: "新疆库尔勒精选香梨1kg约120g/个",
// CommodityPrice: 22.8,
// SmallPic: "http://img10.yiguoimg.com/d/items/2018/180913/9288731145217325_300.jpg"
// },
// {
// CommodityCode: "11236",
// CommodityId: "e47d2ffb-70ac-4208-bfc8-a9688dc6111b",
// CommodityName: "SunMoon能量STAR墨西哥牛油果4个130-160g/个",
// CommodityPrice: 32.9,
// SmallPic: "http://img11.yiguoimg.com/d/items/2018/180808/9288727987234056_300.jpg"
// }