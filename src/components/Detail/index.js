import React,{Component} from 'react';
// import {Navlink} from 'react-router-dom';
import css from './index.module.scss';
import store from '../../store'
import axios from 'axios';

import { Carousel, WingBlank } from 'antd-mobile';
import DatePicker from 'antd-mobile/lib/date-picker';  // 加载 JS
import 'antd-mobile/lib/date-picker/style/css';   // 加载 css

class Detail extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	loadIsShow:true,
	  	proData:{},
	  	cuxiaoData:[],
	  	data: ['1', '2', '3'],
   		imgHeight: 176,
	  };
	}
	render(){
		return(<div>
	{/*-------------------轮播-----------------------------*/}
		<Carousel
		         autoplay={true}
		         infinite
		         dots={true}
		       /* beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      			 afterChange={index => console.log('slide to', index)}*/
		       >
		         {this.state.data.map(val => (
		           <a
		             key={val}
		             href="http://www.alipay.com"
		             style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
		           >
		             <img
		               src={val}
		               alt=""
		               style={{ width: '100%', verticalAlign: 'top' }}
		               onLoad={() => {
		                 // fire window resize event to change height
		                 window.dispatchEvent(new Event('resize'));
		                 this.setState({ imgHeight: 'auto' });
		               }}
		             />
		           </a>
		         ))}
		</Carousel>

			<div className={css.productInfor}>
			        <p className={css.title}>{this.state.proData.CommodityName}</p>
			        <p className={css.subhead}><i className={css.label}>{this.state.proData.PromotionTag}</i>{this.state.proData.SubTitle}</p>
			        <div className={css.price+' '+css.line_bottom}>
			            <p className={css.priceIn}>
			                <span className={css.priceRed}><i>¥</i>{this.state.proData.CommodityPrice}</span>
			                
			            </p>
			         	<p className={css.area}>产地：<span className={css.name}>{this.state.proData.PlaceOfOrigin}</span></p>
			        </div>
			        <div className={css.sevenDay}>
			            <i className={css.dian}></i>{this.state.proData.CanNoReasonToReturnText}
			        </div>
			</div>

			<div className={css.sale}>
			        <h3 className={css.line_bottom}>促销</h3>
			        {this.state.cuxiaoData.map(item=>

			        <div className={css.saleIn} key={item.PromotionId}>
			            <div className={css.saleList+' '+css.saleListTwo+' '+css.line_bottom}>
			                <i className={css.label}>{item.PromotionTypeText}</i>
			                <p className={css.title}>{item.PromotionTitle}</p>
			                
			                {item.PromotionLevels.map((innderItem,index)=>
			                <div className={css.list+' '+css.clear} key={index}>
			                    <p className={css.txt}>{innderItem.LevelTitle}</p>         
			                </div>
			                )}
			            </div>       
			        </div>
			   		
			   		 )}
			</div>

			<div className={css.norms}>
				<div className={css.title}>
				            规格
				    <span className={css.choose}>4个/份</span>
				    <span className={css.choose+" "+css.active}>8个/份</span>
				</div>
				<div className={css.title}>
		            数量
		            <div className={css.num}>
		                <span className ={css.cut+' '+css.line_all}><i></i></span>
		                <span className ={css.input+' '+css.line_all}>1</span>
		                <span className ={css.add+' '+css.line_all}><i></i></span>
		            </div>
		            <span className={css.hint}>限购20件</span>
				</div>
			</div>

			<div className={css.address+' '+css.clear}>
			        <p className={css.title}>送至</p>
			        <div className={css.addressDetail}>
			            <p className={css.add}><span></span>{this.state.proData.ShippingAddress}</p>
			            <p className={css.infor}><span>有货</span>{this.state.proData.DeliveryTips}</p>
			        </div>
			</div>


			<div className={css.recommend}>
			        <h3>大家都在买</h3>
			        <div className={css.listAll}>
			            <ul className={css.allIn}>
			                <li className={css.list}>
			                    <img src="http://img11.yiguoimg.com/d/items/2018/180817/9288729490531601_300.jpg" />
			                    <p className={css.title}>福建琯溪白心蜜柚2个约1kg/个</p>
			                    <p className={css.price}>¥11.00<i className={css.addCart}></i></p>
			                </li>
			            </ul>
			        </div>
			    </div>
	{/*------------------------------加载框--------------------------------------*/}
			<div>
				<div className={css.loading+' '+(this.state.loadIsShow?'':css.hide)}> 
				     <div className={css.img}></div>
			 	</div>
			</div>


			</div>)
	}

	componentWillUnmount(){
		console.log('e1')
		store.dispatch({
			type:'ShowTabbar',
			payload:true
		})
	}

	componentDidMount(){
		console.log('e2')
		store.dispatch({
			type:'HideTabbar',
			payload:false
		})
		console.log('detail.props:',this.props)
		// http://weixin.m.yiguo.com/ProductOpt/GetProductInfo
		axios.post('/ProductOpt/GetProductInfo',`commodityCode=${this.props.match.params.id}`).then(res=>{
			console.log(res.data.RspData.data)
			console.log(res.data.RspData.data.CommodityPromotions);
			this.setState({
				loadIsShow:false,
				proData:res.data.RspData.data,
				data:res.data.RspData.data.Pictures,
				cuxiaoData:res.data.RspData.data.CommodityPromotions
			})
		})

		
	}
}
export default Detail;