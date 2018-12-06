import React,{Component} from 'react';
import {Navlink} from 'react-router-dom';
import css from './index.module.scss';

class Cart extends Component{
	render(){
		return(
			<div className={css.cart}>
				<div className={css.cart_express}>
					全场满100元包邮，还差
					<span className={css.red}>45.00</span>
					元包邮
				</div>
				<div className={css.cart_wrap+''+css.pd}>
					<div className={css.goods}>
						<div className={css.group+''+css.line_bottom}>
							<div className={css.one+''+css.line_bottom}>
								<div className={css.check}>
									<i className={css.ative}></i>
								</div>
								<div className={css.img}>
									<img src="http://img11.yiguoimg.com/d/items/2018/180423/9288722024637591_300.jpg"/>
								</div>
								<div className={css.text}>
									<h2 className={css.elli2}>意大利进口Dolomia多洛米亚天然饮用水经典款1.5L</h2>
									<div className={css.tag}></div>
									<p>
										<strong className={css.red}>
											￥<b>31.8</b>
										</strong>
									</p>
								</div>
								<div className={css.del}>
									<i></i>
								</div>
								<div className={css.limit+''+css.red}>
								</div>
								<div className={css.num}>
			                        <span className={css.cut+''+css.line_all}>
			                        	<i></i>
			                        </span>
			                        <span className={css.input+''+css.line_bottom}>2</span>
			                        <span className={css.add+''+css.line_all}>
			                        	<i></i>
			                        </span>
			                    </div>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
	}
}
export default Cart;