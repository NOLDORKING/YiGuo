import React,{Component} from 'react';
import {Navlink} from 'react-router-dom';
import css from './index.module.scss';
import axios from 'axios';

class Home extends Component{
	render(){
		return(
			<div>
				Home
			</div>
			)
	}
//http://preh5homeapi.yiguo.com/api/Template/GetTemplate
	componentDidMount(){
		axios({
			url:'/api/Template/GetTemplate',
			method:'post',
			'Content-Type':'application/json; charset=utf-8',
			Area:{Default: 0, Version: "2.0", Id: "0718b3bf-b99b-4aa4-97bd-4a4da0b92464", Name: "珠海", Code: 512}
		}).then(res=>{
			console.log(res.data);
		})
	}
}
export default Home;


























// axios.post('/api/Template/GetTemplate',{"Area":{"Default":0,"Version":"2.0","Id":"312d0556-0671-4f2e-8bac-7b8873b5a03a","Name":"上海","Code":1,"DId":"825dbb3c-015a-4a19-a7be-a6bfe4aa0fe0","DName":"宝山区"},"token":"","Channel":5}
// 	).then(res=>{
// 	console.log(res.data)
// })