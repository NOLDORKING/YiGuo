import React,{Component} from 'react';
import {Navlink} from 'react-router-dom';
import css from './index.module.scss';

class Home extends Component{
	render(){
		return(
			<div>
				Home
			</div>
			)
	}
}
export default Home;


























// axios.post('/api/Template/GetTemplate',{"Area":{"Default":0,"Version":"2.0","Id":"312d0556-0671-4f2e-8bac-7b8873b5a03a","Name":"上海","Code":1,"DId":"825dbb3c-015a-4a19-a7be-a6bfe4aa0fe0","DName":"宝山区"},"token":"","Channel":5}
// 	).then(res=>{
// 	console.log(res.data)
// })