import React from 'react';
import Comment from './view/Comment.js'
import User from './view/User.js'
import Topic from './view/topic/Topic.js'
import Product from './view/product/Product.js'
import Perfume from './view/perfume/Perfume.js'
import Addproduct from './view/product/Addproduct.js'
import AddPerfume from './view/perfume/AddPerfume.js'
import AddTopic from './view/topic/AddTopic.js'

export default class Content extends React.Component {
	constructor() {
		super();
	}
	curentContent() {

		// 根据父级传过来的page判断返回哪个子组件
		let page = this.props.page;
		if (page == "1") {
			return <Comment />
		} else if (page == "2") {
			return <User />
		} else if (page == "3") {
			return <Topic />
		} else if (page == "4") {
			return <AddTopic />
		} else if (page == "5") {
			return <Product />
		} else if (page == "6") {
			return <Addproduct />
		} else if (page == "7") {
			return <Perfume />
		} else if (page == "8") {
			return <AddPerfume />
		}
	}
	render() {
		return this.curentContent()
	}
}




