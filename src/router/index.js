import React from "react";
import { BrowserRouter as Router, Route ,Redirect,Switch} from "react-router-dom";
import App from '../App';
import Home from '../components/Home';
import Classfi from '../components/Classfi';
import Eat from '../components/Eat';
import Cart from '../components/Cart';
import My from '../components/My';
const router = (
	<Router>
		<App>
			<Switch>
				<Route path='/home/' render={()=>
					<Home>
						<Switch>
						</Switch>
					</Home>
				}/>
				<Route path='/classfi/' render={()=>
					<Classfi>
						<Switch>
						</Switch>
					</Classfi>
				}/>
				<Route path='/eat/' render={()=>
					<Eat>
						<Switch>
						</Switch>
					</Eat>
				}/>
				<Route path='/cart/' render={()=>
					<Cart>
						<Switch>
						</Switch>
					</Cart>
				}/>
				<Route path='/my/' render={()=>
					<My>
						<Switch>
						</Switch>
					</My>
				}/>

				<Redirect from='/' to='/home'/>
			</Switch>
		</App>
</Router>
)

export default router;