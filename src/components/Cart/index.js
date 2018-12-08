import React,{Component} from 'react';
import {Navlink} from 'react-router-dom';
import css from './index.module.scss';
import axios from 'axios';
class Cart extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist: [],
	  	shoplist:[
	  	{
  		CommodityAmount:1,
		CommodityCode: "108362",
		CommodityId: "3b87649d-022f-4543-b889-3179a7b52668",
		CommodityName: "意大利进口Dolomia多洛米亚天然饮用水经典款1.5L",
		CommodityPrice: 23,
		SmallPic: "http://img11.yiguoimg.com/d/items/2018/180423/9288722024637591_300.jpg",
		Selected:false
		},
		{
		CommodityAmount:1,
		CommodityCode: "1533980",
		CommodityId: "94d22770-0146-4875-b845-1a0467a52e08",
		CommodityName: "四川爱媛蜜柑1kg约100g/个",
		CommodityPrice: 29.9,
		SmallPic: "http://img12.yiguoimg.com/d/items/2018/181017/9288732709823825_300.jpg",
		Selected:false
		},
		],
		allnum:0,
		Selected2:false
	  };

	}
	render(){
		return(
			<div className={css.cart}>
{/*---------------------头-----------------------*/}
				<div className={css.cart_express}>
					全场满100元包邮，还差
					<span className={css.red}>45.00</span>
					元包邮
				</div>
			<div className={css.cart_wrap+' '+css.pd}>
{/*---------------------添加的商品-----------------------*/}		
				<div className={css.goods}>
					<div className={css.group+' '+css.line_bottom}>
					{
						this.state.shoplist.map((item,index)=>
						<div className={css.one+' '+css.line_bottom}  key={item.CommodityId}>
							<div className={css.check}>
								<i className={item.Selected?css.active:''} onClick={this.handleCheckClick.bind(this,index)}></i>
							</div>
							<div className={css.img}>
								<img src={item.SmallPic}/>
							</div>
							<div className={css.text}>
								<h2 className={css.elli2}>{item.CommodityName}</h2>
								<div className={css.tag}></div>
								<p>
									<strong className={css.red}>
										￥<b>{item.CommodityPrice}</b>
									</strong>
								</p>
							</div>
							<div className={css.del}>
								<i></i>
							</div>
							<div className={css.limit+' '+css.red}>
							</div>
							<div className={css.num}>
		                        <span className={css.cut+' '+css.line_all+' '+css.active} ref="num_cut" onClick={this.handleCutClick.bind(this,`num_input${index}`,index)}>
		                        	<i></i>
		                        </span>
		                        <span className={css.input+' '+css.line_bottom} ref={`num_input${index}`}>{item.CommodityAmount}</span>
		                        <span className={css.add+' '+css.line_all} ref="num_add" onClick={this.handleAddClick.bind(this,`num_input${index}`,index)}>
		                        	<i></i>
		                        </span>
		                    </div>
						</div>
							)
					}
					</div>
				</div>

				<div className={css.guess+' '+css.line_bottom}>
					<div className={css.title+' '+css.line_top}>
						<h2>猜你喜欢</h2>
					</div>
					<div className={css.list+' '+css.clear}>
					{
						this.state.datalist.map(item=>
							
						<div className={css.one} key={item.CommodityId}>
							<div className={css.img}>
								<img src={item.SmallPic} key={item.CommodityId}/>
							</div>
		                    <div className={css.text}>
		                        <h2 className={css.elli2}>{item.CommodityName}</h2>
		                        <p>
		                        	<strong className={css.red}>￥<b>{item.CommodityPrice}</b></strong>
		                        </p>
		                    </div>
		                    <div className={css.btn}>
		                    	<a href="javascript:;"></a>
		                    </div>
	                	</div>
						)
                	}
					</div>
				</div>
			</div>
{/*---------------------合计-----------------------*/}
			<div className={css.cart_total+' '+css.line_top}>
		        <div className={css.check}>

			        <i className={this.state.Selected2?css.active:''} onClick={this.handleAllCheckClick.bind(this)}></i>
			        全选
		        </div>
		        <div className={css.text}>
		            <p>合计(不含运费)：<b className={css.red}>¥{this.state.allnum}</b></p>
		            <span>已优惠: ¥0.00</span>
		        </div>
		        <div className={css.btn}>
		            <a href="javascript:;">去结算(2)</a>
		        </div>
			</div>
		</div>
			)
	}

	handleCutClick(inputTxt,index){
		var num = parseInt(this.refs[inputTxt].innerHTML);
		this.refs[inputTxt].innerHTML=(num<2?1:--num);
		var newShoplist = this.state.shoplist;
		newShoplist[index].CommodityAmount=num;
		this.setState({
			shoplist:newShoplist,
		})
		this.allNum.call(this);
	}

	handleAddClick(inputTxt,index){
		var num = parseInt(this.refs[inputTxt].innerHTML);
		this.refs[inputTxt].innerHTML=++num;
		var newShoplist = this.state.shoplist;
		newShoplist[index].CommodityAmount=num;
		this.setState({
			shoplist:newShoplist,
		})
		this.allNum.call(this);
	}

	handleCheckClick(index){
		var newShoplist = this.state.shoplist;
		newShoplist[index].Selected=!newShoplist[index].Selected;
		this.setState({
			shoplist:newShoplist,
		})
		this.allNum.call(this);
	}

	handleAllCheckClick(){
		var newShoplist = this.state.shoplist;
		newShoplist.forEach((item) => {
		 item.Selected = !this.state.Selected2
		})
		// newShoplist[].Selected=!newShoplist[].Selected;
		this.setState({
			Selected2:!this.state.Selected2,
			shoplist:newShoplist,
		})
		this.allNum.call(this);
	}

	allNum(){
		var allnum = 0;

		this.state.shoplist.forEach((item) => {
		  if(item.Selected){
		  	allnum=allnum+item.CommodityPrice*item.CommodityAmount;
		  }
		})
		this.setState({
			allnum:allnum,
		})
	}
	componentDidMount(){
		axios({
			url:'/CartOpt/RefreshCart?_=1544165085798',
			method:'get',
			
		}).then((res)=>{
			console.log(res.data.RspData.GuessYouLikeCommoditys);
			
			this.setState({
				datalist:res.data.RspData.GuessYouLikeCommoditys,

			})
		})
		this.allNum.call(this);
	}
}
export default Cart;


