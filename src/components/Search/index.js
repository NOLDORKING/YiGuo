import React,{Component} from 'react';
// import {Navlink} from 'react-router-dom';
import css from './index.module.scss';
import store from '../../store';
import axios from 'axios';

class Search extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	prolist:[],
	  	catCode:false,
	  	keyWord:false,
	  	catCodeValue:'',
	  	keyWordValue:'',

	  	xlActive:true,
	  	xpActive:false,
	  	jgActive:false,

	  	loadIsShow:true
	  };
	}
	render(){
		return(
			<div>
				<div className={css.navList}>

				        <div className={css.list+' '+(this.state.xlActive?css.active:'')} onClick={this.Click.bind(this,'')} >销量</div>
				        <div className={css.list+' '+(this.state.xpActive?css.active:'')} onClick={this.Click.bind(this,'NewCommodity')} >新品</div>
				        <div className={css.list+' '+(this.state.jgActive?css.active:'')} onClick={this.Click.bind(this,'PriceAsc')} >价格<i className={css.priceIcon} ></i></div>
				</div>
				<div className={css.proBox}>
					{
						this.state.prolist.map((item,index)=>
							<div className={css.productContent} key={item.CommodityId} onClick={this.proClick.bind(this,item.CommodityCode)}>
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
				<div className={css.loading+' '+(this.state.loadIsShow?'':css.hide)}> 
				     <div className={css.img}></div>
			 	</div>


			</div>
		)
	}

	proClick(proCode){
		console.log(this.props)
		this.props.history.push(`/detail/${proCode}`)
	

	}

	Click(searchText){
		this.setState({
			loadIsShow:true
		},)
		if(this.state.keyWord){
			axios.post('/ProductOpt/GetProductLists',`KeyWord=${this.state.keyWordValue}&CatCode=&PageIndex=1&PageSize=20&Sort=${searchText}`
				).then(res=>{
					console.log(res.data)
					this.setState({
						prolist:res.data.RspData.data,
						loadIsShow:false
					},)

					console.log(`keyWord${searchText}：`,this.state.prolist);
				})
		}
		if(this.state.catCode){
			axios.post('/ProductOpt/GetProductLists',`KeyWord=&CatCode=${this.state.catCodeValue}&PageIndex=1&PageSize=20&Sort=${searchText}`
				).then(res=>{
					console.log(res.data)
					this.setState({
						prolist:res.data.RspData.data,
						loadIsShow:false	
					})
					console.log(`catCode${searchText}：`,this.state.prolist);
				})
		}
		switch(searchText){
			case '':
			this.setState({
				xlActive:true,
				xpActive:false,
				jgActive:false
			});
			break;
			case 'NewCommodity':
			this.setState({
				xlActive:false,
				xpActive:true,
				jgActive:false
			});
			break;
			case 'PriceAsc':
			this.setState({
				xlActive:false,
				xpActive:false,
				jgActive:true
			});
			break;
		}
		
	}

	

	searchUrl(){
		console.log('this.props：',this.props);
		var searchStr = this.props.location.search;
		console.log(searchStr);
		var strReg = /.(.*)=(.*)/;
		strReg.test(searchStr);
		console.log('RegExp.$1:',RegExp.$1)
		console.log('RegExp.$2:',RegExp.$2)
		if(RegExp.$1 ==='catCode'){
			this.setState({
				catCode:true,
				catCodeValue:RegExp.$2
			},()=>{
				this.Click.call(this,'');
			})
		}
		if(RegExp.$1 === 'keyWord'){
			console.log('====')
			this.setState({
				keyWord:true,
				keyWordValue:RegExp.$2
			},()=>{
				console.log(this.state);
				console.log('keyWord:',this.state.keyWord,',keyWordValue:',this.state.keyWordValue)
				this.Click.call(this,'');
			})
		}
	}
	componentDidMount(){
		store.dispatch({
			type:'HideTabbar',
			payload:false
		})	
		this.searchUrl.call(this);
	}

	
	componentWillUnmount(){
		store.dispatch({
			type:'HideTabbar',
			payload:true
		})
	}
}
export default Search;