import React from 'react';
import Topic from './Topic.js';
import Home from './home.js';
export default class MyContent extends React.Component {
	constructor() {
		super();
	}
	curentContent() {
		let page = this.props.page;
		if(page=="主页") {
			return <Home />
		}else if(page=="专题"){
			return <Topic />
		}else{
			return <div>no</div>
		}
	} 
	render() {
		return this.curentContent() 
	}
}




					