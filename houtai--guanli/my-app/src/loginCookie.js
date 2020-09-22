import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";

import Main from "./Main.js";
import LoginChild from "./loginchild/loginchild";

//要放在import之后
const myHistory = createHashHistory();

export default class App extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
		this.checkLogin();
	}
	getByKey(key) {
		let name = key + "=";
		let ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i].trim();
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return null;
	}
	checkLogin() {
		let no = this.getByKey("name");
		if (no) { //登陆成功
			console.log(11111)
			this.props.history.push("/main")
		} else { //没有登陆
			this.props.history.push("/login")
		}
	}

	render() {
		return (
			<div></div>
		);
	}
}
