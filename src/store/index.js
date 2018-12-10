import {createStore,combineReducers} from 'redux';
import tabbarReducer from './Reducers/tabbarReducer';
import detailCodeReducer from './Reducers/detailCodeReducer'
const reducer= combineReducers({
	tabbarReducer,
	detailCodeReducer
})

const store = createStore(reducer);

export default store;