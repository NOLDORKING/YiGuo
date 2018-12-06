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
//http://preh5homeapi.yiguo.com/api/Template/GetTemplate
	componentDidMount(){
		axios({
			url:'/api/Template/GetTemplate'
			method:'post'
			headers:{

			}
		}).then(res=>{
			console.log(res.data)
		})
	}
}
export default Home;