import React,{Component} from 'react';
import {Navlink} from 'react-router-dom';
import css from './index.module.scss';
import axios from 'axios';
import Swiper from "swiper";
//import "../../../node_module/swiper";
import "swiper/dist/css/swiper.css";

class Home extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	swiper_list:null,
	  	first_menu_list:null
	  };
	}
	render(){
		return(
			<div className={css.home}>
		{/*顶部*/}
				<div className={css.home_top}>
					<a>珠海</a> <div className={css.top_search} key></div>
				</div>
		{/*上边轮播*/}
		{
			this.state.swiper_list?
			<div className="swiper-container">
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
								{item.navName}
							</li>
				      		)
					      }			
					</ul> 
				</div>
				:null
			}
			


				Home
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
	 		console.log(res.data.data.template.componentList[0].componentNavs);
	 		this.setState({
	 			swiper_list:res.data.data.template.componentList[0].carouselPictures,
	 			first_menu_list:res.data.data.template.componentList[0].componentNavs
	 		},()=>{
	 			 var swiper = new Swiper('.swiper-container', {
				      slidesPerView: 1,
				      spaceBetween: 30,
				      loop: true,
				      pagination: {
				        el: '.swiper-pagination',
				        clickable: true,
				      },
				      navigation: {
				        nextEl: '.swiper-button-next',
				        prevEl: '.swiper-button-prev',
				      },
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