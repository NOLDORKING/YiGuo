const detailCodeReducer = (prevState='',action)=>{

	// console.log(action)
	let {type,payload} = action;
	switch(type){
		case 'detailCode':
		return payload;
		default:
		return prevState;
	}
	return payload;
}

export default detailCodeReducer;