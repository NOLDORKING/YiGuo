import React,{Component} from 'react';
// import {Navlink} from 'react-router-dom';
import css from './index.module.scss';

import axios from 'axios';

class Classfi extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	boxIsShow:true,
	  	navlist:[],
	  	listContent:[]
	  };
	}
	render(){
		return(
			<div className={css.main}>
				<header>
					<form>
						<input placeholder="请输入商品名称" onFocus={this.getfocus.bind(this)} ref="searchText"/>

						<i className={css.search_icon}></i>
					</form>
					<span onClick={this.serchClick.bind(this)}>搜索</span>

				</header>
				<div className={css.boxBg+" "+(this.state.boxIsShow?css.isShow:'')} onClick={this.boxBgClick.bind(this)}></div>
				<section className={css.clear}>
					<div className={css.leftbar}>
						<ul className={css.navlist}>
						{
							this.state.navlist.map((item,index)=>
									<li key={item.CategoryId} className={item.isActive?css.active:''}
									onClick={this.navlistClick.bind(this,index)}
									>
										{item.CategoryName}
									</li>


								)
						}
						<div className={css.ceshi}></div>
						</ul>
					</div>
					<ul className={css.rightContent}>
						<li>
							<div className={css.commodityBox}>
								{
									this.state.listContent.map((item,index)=>
											<a href="javascript:;" key={item.CategoryId} className={css.commodityList}>
												<img src={item.PictureUrl}/>
												{item.CategoryName}
											</a>
										)
								}
							</div>
						</li>
					</ul>
				</section>
			</div>
			)
	}
	getfocus(){
		console.log('focus')
		this.setState({
			boxIsShow:false
		})
		console.log(this.state.boxIsShow);
	}

	boxBgClick(){
		this.setState({
			boxIsShow:true
		})
	}
	navlistClick(index){

		var newnavlist = this.state.navlist;
		newnavlist = newnavlist.map(item=>{
			item.isActive = false;
			return item;
		})
		newnavlist[index].isActive = true
		

		this.setState({
			navlist:newnavlist,
			listContent:newnavlist[index].Childs
		})


	}

	serchClick(){
		console.log(this.refs.searchText.value)
		console.log('lalal',this.props);
		var text = this.refs.searchText.value ;
		this.props.history.push(`/search/${text}`)

	}
	componentDidMount(){
		axios({
			url:'/CategoryOpt/GetCategory',
			method:'get',
			
		}).then((res)=>{
			console.log(res.data.RspData.data);
			console.log(res.data.RspData.data[0].Childs)
			var list = res.data.RspData.data.map((item) => {
			 	item.isActive = false;
			 	return item;
			})
			list[0].isActive = true;
			this.setState({
				navlist:list,
				listContent:res.data.RspData.data[0].Childs

			})
		})

		
	}
}
export default Classfi;