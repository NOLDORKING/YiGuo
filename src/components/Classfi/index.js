import React,{Component} from 'react';
import {Navlink} from 'react-router-dom';
import css from './index.module.scss';

import axios from 'axios';
class Classfi extends Component{
	render(){
		return(
			<div className="main">
				<header>
					<input placeholder="请输入商品名称"/>
					<i className="css.search_icon"></i>
					<span>搜索</span>
				</header>
				<section>
				</section>
			</div>
			)
	}

	componentDidMount(){
		axios({
			url:'/CategoryOpt/GetCategory',
			method:'get',
			
		}).then((res)=>{
			console.log(res.data)
		})

		
	}
}
export default Classfi;