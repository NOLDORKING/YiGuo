import React,{Component} from 'react';
import {Navlink} from 'react-router-dom';
import css from './index.module.scss';
import store from '../../store'
import axios from 'axios';
class Eat extends Component{
	render(){
		return(
			<div>
				Eat
			</div>
			)
	}

	componentWillUnmount(){
		console.log('e1')
		store.dispatch({
			type:'ShowMaizuoTabbar',
			payload:true
		})
	}

	componentDidMount(){
		console.log('e2')
		store.dispatch({
			type:'HideMaizuoTabbar',
			payload:false
		})
	}
}
export default Eat;