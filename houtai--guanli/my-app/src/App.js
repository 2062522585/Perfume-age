import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";

import Main from "./Main.js";
// import Login from "./Login.js";
import LoginChild from "./loginchild/loginchild";

//要放在import之后
const myHistory = createHashHistory();

export default class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<Router history={myHistory}>
				<Route path="/main" component={Main} />
				<Route exact={true} path="/login" component={LoginChild} />
			</Router>
		);
	}
}