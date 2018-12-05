import React,{Component} from 'react';
import {Navlink} from 'react-router-dom';
import css from './index.module.scss';

import axios from 'axios';
class Classfi extends Component{
	render(){
		return(
			<div>
				Classfi
			</div>
			)
	}
	// http://preh5homeapi.yiguo.com/api/Template/GetTemplate
	componentDidMount(){
		axios.post('/api/Template/GetTemplate').then(res=>{
			console.log(res.data)
		})

		axios.post('/CategoryOpt/GetCategory').then((res)=>{
			console.log(res.data)
		})

		axios({
			url:"/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7387392",
			method: 'get', 
			headers:{
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"1"}',
				'X-Host': 'mall.film-ticket.film.list'
			}
		}).then(res=>{
			console.log(res.data);
		})
	}
}
export default Classfi;