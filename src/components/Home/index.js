import React,{Component} from 'react';
import {Navlink} from 'react-router-dom';
import css from './index.module.scss';
import axios from 'axios';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

class Home extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	swiper_list:null,
	  	first_menu_list:null,
	  	screen_list:null,
	  	pro_list_1:null,
	  	pro_list_2:null,
	  	pro_list_3:null,
	  	pro_list_4:null,
	  	pro_list_5:null,
	  	pro_list_6:null,
	  	pro_li_list:null

	  };
	}
	render(){
		return(
			<div className={css.home}>
		{/*顶部*/}
				<div className={css.home_top}>
					<a>珠海</a> <div className={css.top_search}></div>
				</div>
		{/*上边轮播*/}
		{
			this.state.swiper_list?
			<div className="swiper-container ws_a">
			    <div className="swiper-wrapper">
				      {
				      	this.state.swiper_list.map(item=>
							<div className="swiper-slide">
								<div className={css.swiper_img}>
			      					<img src={item.pictureUrl} key={item.pictureUrl} alt=""/>
			      				</div>
							</div>
				      		)
				      }			     
			    </div>
			       
			    <div className="swiper-pagination"></div>
			 </div>
			 	:null
		}
			{/*图片*/}
			<div className={css.ws_img}>
				<img src="//img10.yiguoimg.com/d/items/2018/181130/9710947299829118_1125x344.gif?w=1125&amp;h=344"/>
			</div>
			{/*第一个菜单*/}
			{
				this.state.first_menu_list?
				<div className={css.first_menu}>
					<ul>
						{
				      		this.state.first_menu_list.map(item=>
							<li key={item.navName}>
							<img src={item.pictureUrl} key={item.pictureUrl}/>
							<p>{item.navName}</p>
							</li>
				      		)
					      }			
					</ul> 
				</div>
				:null
			}
		{/*竖屏滚动*/}
			<div className={css.screen}>
				<div className={css.screen_left}>
				
				</div>
				<div className={css.screen_right}>
				{
					this.state.screen_list?
					<div className="swiper-container ws_b">
					    <div className="swiper-wrapper">{
					    	this.state.screen_list.map(item=>
								<div className="swiper-slide">
									<div className={css.screen_word}>
										{item.fastReportTitle}
									</div>
								</div>
					    		)
					    }
					    </div>
					  </div>
					  :null
				}
				</div>
			</div>
		{/*img----1*/}	
			<div className={css.ws_img_2}>
				<img src="//img14.yiguoimg.com/d/items/2018/181201/9288734857307521_1125x652.jpg?w=1125&amp;h=652" alt=""/>
			</div>
		{/*滑动商品条1*/}	
			<div className={css.pro_swiper_1}>
			{
				this.state.pro_list_1?
				<div className="swiper-container ws_pro_1">
				    <div className="swiper-wrapper">
				     {
				      	this.state.pro_list_1.map(item=>
 							<div className="swiper-slide">
 								<img src={item.pictureUrl} key={item.pictureUrl} alt=""/>
 								<div className={css.pro1_info}>
 									<div>
 									<a className={css.pro_name}>{item.commodityName}</a></div>
 									{
 										item.saleSlogan?
 										<div className={css.pro_dec}>{item.saleSlogan}</div>
 										:
 										<div className={css.pro_help}></div>
 									}
 									
 									<div className={css.pro_price}><span className={css.pro_num}>￥{item.commodityPrice}</span><span className={css.pro_kg}>{item.commoditySpec}</span></div>
 								</div>
 							</div>
				      		)
				      }			      
				    </div>
				  </div>
				  :null
			}
			</div>	
		{/*img----2*/}	
			<div className={css.ws_img_2}>
				<img src="//img13.yiguoimg.com/d/items/2018/181201/9288734857340289_1125x652.jpg?w=1125&amp;h=652" alt=""/>
			</div>
		{/*滑动商品条2*/}	
			<div className={css.pro_swiper_1}>
			{
				this.state.pro_list_2?
				<div className="swiper-container ws_pro_1">
				    <div className="swiper-wrapper">
				     {
				      	this.state.pro_list_2.map(item=>
 							<div className="swiper-slide">
 								<img src={item.pictureUrl} key={item.pictureUrl} alt=""/>
 								<div className={css.pro1_info}>
 									<div>
 									<a className={css.pro_name}>{item.commodityName}</a></div>
 									{
 										item.saleSlogan?
 										<div className={css.pro_dec}>{item.saleSlogan}</div>
 										:
 										<div className={css.pro_help}></div>
 									}
 									
 									<div className={css.pro_price}><span className={css.pro_num}>￥{item.commodityPrice}</span><span className={css.pro_kg}>{item.commoditySpec}</span></div>
 								</div>
 							</div>
				      		)
				      }			      
				    </div>
				  </div>
				  :null
			}
			</div>
		{/*img----3*/}	
			<div className={css.ws_img_2}>
				<img src="//img12.yiguoimg.com/d/items/2018/181201/9288734857373057_1125x652.jpg?w=1125&amp;h=652" alt=""/>
			</div>	
		{/*滑动商品条3*/}	
			<div className={css.pro_swiper_1}>
			{
				this.state.pro_list_3?
				<div className="swiper-container ws_pro_1">
				    <div className="swiper-wrapper">
				     {
				      	this.state.pro_list_3.map(item=>
 							<div className="swiper-slide">
 								<img src={item.pictureUrl} key={item.pictureUrl} alt=""/>
 								<div className={css.pro1_info}>
 									<div>
 									<a className={css.pro_name}>{item.commodityName}</a></div>
 									{
 										item.saleSlogan?
 										<div className={css.pro_dec}>{item.saleSlogan}</div>
 										:
 										<div className={css.pro_help}></div>
 									}
 									
 									<div className={css.pro_price}><span className={css.pro_num}>￥{item.commodityPrice}</span><span className={css.pro_kg}>{item.commoditySpec}</span></div>
 								</div>
 							</div>
				      		)
				      }			      
				    </div>
				  </div>
				  :null
			}
			</div>
		{/*img----4*/}	
			<div className={css.ws_img_2}>
				<img src="//img12.yiguoimg.com/d/items/2018/181206/9288735105197446_1125x652.jpg?w=1125&amp;h=652" alt=""/>
			</div>	
		{/*滑动商品条4*/}	
			<div className={css.pro_swiper_1}>
			{
				this.state.pro_list_4?
				<div className="swiper-container ws_pro_1">
				    <div className="swiper-wrapper">
				     {
				      	this.state.pro_list_4.map(item=>
 							<div className="swiper-slide">
 								<img src={item.pictureUrl} key={item.pictureUrl} alt=""/>
 								<div className={css.pro1_info}>
 									<div>
 									<a className={css.pro_name}>{item.commodityName}</a></div>
 									{
 										item.saleSlogan?
 										<div className={css.pro_dec}>{item.saleSlogan}</div>
 										:
 										<div className={css.pro_help}></div>
 									}
 									
 									<div className={css.pro_price}><span className={css.pro_num}>￥{item.commodityPrice}</span><span className={css.pro_kg}>{item.commoditySpec}</span></div>
 								</div>
 							</div>
				      		)
				      }			      
				    </div>
				  </div>
				  :null
			}
			</div>
		{/*img----5*/}	
			<div className={css.ws_img_2}>
				<img src="//img12.yiguoimg.com/d/items/2018/181201/9288734853997953_1125x652.jpg?w=1125&amp;h=652" alt=""/>
			</div>	
		{/*滑动商品条5*/}	
			<div className={css.pro_swiper_1}>
			{
				this.state.pro_list_5?
				<div className="swiper-container ws_pro_1">
				    <div className="swiper-wrapper">
				     {
				      	this.state.pro_list_5.map(item=>
 							<div className="swiper-slide">
 								<img src={item.pictureUrl} key={item.pictureUrl} alt=""/>
 								<div className={css.pro1_info}>
 									<div>
 									<a className={css.pro_name}>{item.commodityName}</a></div>
 									{
 										item.saleSlogan?
 										<div className={css.pro_dec}>{item.saleSlogan}</div>
 										:
 										<div className={css.pro_help}></div>
 									}
 									
 									<div className={css.pro_price}><span className={css.pro_num}>￥{item.commodityPrice}</span><span className={css.pro_kg}>{item.commoditySpec}</span></div>
 								</div>
 							</div>
				      		)
				      }			      
				    </div>
				  </div>
				  :null
			}
			</div>
		{/*img----6*/}	
			<div className={css.ws_img_2}>	
				<img src="//img10.yiguoimg.com/d/items/2018/181207/9288735169750407_1125x652.jpg?w=1125&amp;h=652" alt=""/>
			</div>	
		{/*滑动商品条6*/}	
			<div className={css.pro_swiper_1}>
			{
				this.state.pro_list_6?
				<div className="swiper-container ws_pro_1">
				    <div className="swiper-wrapper">
				     {
				      	this.state.pro_list_6.map(item=>
 							<div className="swiper-slide">
 								<img src={item.pictureUrl} key={item.pictureUrl} alt=""/>
 								<div className={css.pro1_info}>
 									<div>
 									<a className={css.pro_name}>{item.commodityName}</a></div>
 									{
 										item.saleSlogan?
 										<div className={css.pro_dec}>{item.saleSlogan}</div>
 										:
 										<div className={css.pro_help}></div>
 									}
 									
 									<div className={css.pro_price}><span className={css.pro_num}>￥{item.commodityPrice}</span><span className={css.pro_kg}>{item.commoditySpec}</span></div>
 								</div>
 							</div>
				      		)
				      }			      
				    </div>
				  </div>
				  :null
			}
			</div>
		{/*img----7*/}	
			<div className={css.ws_img_2}>	
				<img src="//img14.yiguoimg.com/d/items/2018/181207/9288735190558087_1125x652.jpg?w=1125&amp;h=652" alt=""/>
			</div>	
		{/*滑动商品条7*/}	
			<div className={css.pro_swiper_1}>
			{
				this.state.pro_list_7?
				<div className="swiper-container ws_pro_1">
				    <div className="swiper-wrapper">
				     {
				      	this.state.pro_list_7.map(item=>
 							<div className="swiper-slide">
 								<img src={item.pictureUrl} key={item.pictureUrl} alt=""/>
 								<div className={css.pro1_info}>
 									<div>
 									<a className={css.pro_name}>{item.commodityName}</a></div>
 									{
 										item.saleSlogan?
 										<div className={css.pro_dec}>{item.saleSlogan}</div>
 										:
 										<div className={css.pro_help}></div>
 									}
 									
 									<div className={css.pro_price}><span className={css.pro_num}>￥{item.commodityPrice}</span><span className={css.pro_kg}>{item.commoditySpec}</span></div>
 								</div>
 							</div>
				      		)
				      }			      
				    </div>
				  </div>
				  :null
			}
			</div>
		{/*img----7*/}	
			<div className={css.ws_img_7}>	
				<img src="//img10.yiguoimg.com/d/items/2018/181201/9288734857569665_1125x408.jpg?w=1125&amp;h=408" alt=""/>
			</div>	
		{/*图片结束之后有个列表*/}
			<ul>
				
			</ul>
		{/*底部辅助块*/}
			<div className={css.help}></div>
			</div>
			)
	}
//http://preh5homeapi.yiguo.com/api/Template/GetTemplate
	componentDidMount(){
		/*axios({
			url:'/api/Template/GetTemplate',
			method:'post',
			headers:{"Area":{"Default":0,"Version":"2.0","Id":"0718b3bf-b99b-4aa4-97bd-4a4da0b92464","Name":"珠海","Code":512,"DId":"cf9fb708-95bc-4188-b9eb-8caebe3836be","DName":"南湾区"},"token":"","Channel":5}
		}).then(res=>{
			console.log(res.data);
		})*/
		


		 axios.post('/api/Template/GetTemplate',{"Area":{"Default":0,"Version":"2.0","Id":"312d0556-0671-4f2e-8bac-7b8873b5a03a","Name":"上海","Code":1,"DId":"825dbb3c-015a-4a19-a7be-a6bfe4aa0fe0","DName":"宝山区"},"token":"","Channel":5}
	 	).then(res=>{
	 		console.log(res.data);
	 		//console.log(res.data.data.template.componentList[0].carouselPictures);
	 		//console.log(res.data.data.template.componentList[0].componentNavs);
	 		//console.log(res.data.data.template.componentList[0].fastReports);
	 		//console.log(res.data.data.template.componentList[1].componentCommoditys);
	 		console.log(res.data.data.template.componentList[2].componentCommoditys);
	 		this.setState({
	 			swiper_list:res.data.data.template.componentList[0].carouselPictures,
	 			first_menu_list:res.data.data.template.componentList[0].componentNavs,
	 			screen_list:res.data.data.template.componentList[0].fastReports,
	 			pro_list_1:res.data.data.template.componentList[1].componentCommoditys,
	 			pro_list_2:res.data.data.template.componentList[2].componentCommoditys,
	 			pro_list_3:res.data.data.template.componentList[3].componentCommoditys,
	 			pro_list_4:res.data.data.template.componentList[4].componentCommoditys,
	 			pro_list_5:res.data.data.template.componentList[5].componentCommoditys,
	 			pro_list_6:res.data.data.template.componentList[6].componentCommoditys
	 			
	 		},()=>{
	 			 var swiper = new Swiper('.ws_a', {
				      slidesPerView: 1,
				      spaceBetween: 30,
				      loop: true,
				       pagination: {
				        el: '.swiper-pagination',
				        clickable: true,
				      },
				   
				       autoplay: {
				        delay: 2500,
				        disableOnInteraction: false,
				      },
				    });
	 			 var swiper = new Swiper('.ws_b', {
				      direction: 'vertical',
				      slidesPerView: 1,
				      spaceBetween: 30,
				      loop: true,
				      
			        autoplay: {
					    delay: 2500,
					    disableOnInteraction: false,
					  },
				    });
	 			 var swiper = new Swiper('.ws_pro_1', {
				      slidesPerView: 3.5,
				      spaceBetween: 30,
				      freeMode: true,
				     
				    });
	 		})
	 	})
		}

}
export default Home;


























// axios.post('/api/Template/GetTemplate',{"Area":{"Default":0,"Version":"2.0","Id":"312d0556-0671-4f2e-8bac-7b8873b5a03a","Name":"上海","Code":1,"DId":"825dbb3c-015a-4a19-a7be-a6bfe4aa0fe0","DName":"宝山区"},"token":"","Channel":5}
// 	).then(res=>{
// 	console.log(res.data)
// })