import React,{Component} from 'react';
import {Navlink} from 'react-router-dom';
import css from './index.module.scss';
import store from '../../store';
import axios from 'axios';

class Search extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	prolist:[],
	  	xlActive:true,
	  	xpActive:false,
	  	jgActive:false
	  };
	}
	render(){
		return(
			<div>
				<div className={css.navList}>

				        <div className={css.list+' '+(this.state.xlActive?css.active:'')} onClick={this.xlClick.bind(this)} >销量</div>
				        <div className={css.list+' '+(this.state.xpActive?css.active:'')} onClick={this.xpClick.bind(this)} >新品</div>
				        <div className={css.list+' '+(this.state.jgActive?css.active:'')} onClick={this.jgClick.bind(this)} >价格<i className={css.priceIcon} ></i></div>
				</div>
				<div className={css.proBox}>
					{
						this.state.prolist.map((item,index)=>
							<div className={css.productContent} key={item.CommodityId}>
							            <div className={css.img}>			                
							                <img src={item.SmallPic}/>
							            </div>
							            <div className={css.inforPro}>
							                <p className={css.title}>{item.CommodityName}</p>
							                <p className={css.txt}>{item.SubTitle}</p>
							                
							                <p className={css.price}>
							                    <span className={css.priceRed}>￥{item.CommodityPrice}</span>
							                    
							                    <span className={css.standard}>{item.Spec}</span>
							                    <span className={css.addCart}></span>
							                    
							                    
							                </p>
							            </div>
							        </div>
							)
					}
				</div>
			</div>
		)
	}

	xpClick(){
		axios.post('/ProductOpt/GetProductLists',`KeyWord=${this.props.match.params.id}&CatCode=&PageIndex=1&PageSize=20&Sort=NewCommodity`
			).then(res=>{
				console.log(res.data)
				this.setState({
					prolist:res.data.RspData.data	
				})
				console.log('新品：',this.state.prolist);
			})
		this.setState({
			xlActive:false,
			xpActive:true,
			jgActive:false
		})
	}

	jgClick(){
		axios.post('/ProductOpt/GetProductLists',`KeyWord=${this.props.match.params.id}&CatCode=&PageIndex=1&PageSize=20&Sort=PriceAsc`
			).then(res=>{
				console.log(res.data)
				this.setState({
					prolist:res.data.RspData.data	
				})
				console.log('价格：',this.state.prolist);
			})
		this.setState({
			xlActive:false,
			xpActive:false,
			jgActive:true
		})
	}
	xlClick(){
		axios.post('/ProductOpt/GetProductLists',`KeyWord=${this.props.match.params.id}&CatCode=&PageIndex=1&PageSize=20&Sort=`
			).then(res=>{
				console.log(res.data)
				this.setState({
					prolist:res.data.RspData.data	
				})
				console.log('销量：',this.state.prolist);
			})
		this.setState({
			xlActive:true,
			xpActive:false,
			jgActive:false
		})
	}
	componentDidMount(){
		store.dispatch({
			type:'HideTabbar',
			payload:false
		})
		console.log(this.props.match.params.id)
		axios.post('/ProductOpt/GetProductLists',`KeyWord=${this.props.match.params.id}&CatCode=&PageIndex=1&PageSize=20&Sort=`
			).then(res=>{
				console.log(res.data)
				this.setState({
					prolist:res.data.RspData.data	
				})
				console.log(this.state.prolist);
			})
	}

	
	componentWillUnmount(){
		store.dispatch({
			type:'HideTabbar',
			payload:true
		})
	}
}
export default Search;