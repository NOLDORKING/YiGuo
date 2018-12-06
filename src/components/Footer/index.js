import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import css from './index.module.scss';
import store from '../../store';
class Footer extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isShow:true
	  };
	}
	render(){
		return(
			<footer className={this.state.isShow?'':css.hide}>
			<ul>
	        	<li><NavLink to='/home'  activeClassName={css.iHome}>
	        	<i className={css.i_home}></i>
	        	<span>首页</span>
	        	</NavLink></li>
	        	<li><NavLink to='/classfi'  activeClassName={css.iClassfi}>
	        	<i className={css.i_classfi}></i>
	        	<span>分类</span>
	        	</NavLink></li>
	        	<li><NavLink to='/eat'  activeClassName={css.iEat}>
	        	<i className={css.i_eat}></i>
	        	<span>吃饭吧</span>
	        	</NavLink></li>
	        	<li><NavLink to='/cart'  activeClassName={css.iCart}>
	        	<i className={css.i_cart}></i>
	        	<span>购物车</span>
	        	</NavLink></li>
	        	<li><NavLink to='/my'  activeClassName={css.iMy}>
	        	<i className={css.i_my}></i>
	        	<span>我的易果</span>
	        	</NavLink></li>
	        </ul>
			</footer>
			)
	}
	componentWillMount(){
		store.subscribe(()=>{
			this.setState({
				isShow:store.getState().tabbarReducer

			})
		})
	}
}
export default Footer;