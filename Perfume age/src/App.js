//App.js
import React from "react";
import "./App.css";
import Home from "./home/Home.js";
import Leaderboard from "./home/Leaderboard.js";
import Fragrance from "./nav/Fragrance.js";
import Odor from "./nav/Odor.js";
import Perfumer from "./nav/Perfumer.js";
import Brand from "./nav/Brand.js";
import Nav from "./nav/Nav.js";
import Topic from './nav/Topic.js';
import NewThing from './community/NewThing.js';
import Community from './community/Community.js';
import Try from './try/Try.js';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";

const myHistory = createHashHistory();

export default class App extends React.Component {
    constructor() {
		super();
		this.state={
		}
    }
	dispatch(key) {
	}
  render() {
    return (
			<Router history={myHistory}>
			<Route   component={Nav} />
			<Route exact={true} path="/" component={Home}/>
			<Route   path="/Leaderboard" component={Leaderboard} />
			<Route   path="/Topic" component={Topic} />
			<Route   path="/NewThing" component={NewThing} />
			<Route   path="/Community" component={Community} />
			<Route   path="/Try" component={Try} />
			<Route   path="/Fragrance" component={Fragrance} />
			<Route   path="/Odor" component={Odor} />
			<Route   path="/Perfumer" component={Perfumer} />
			<Route   path="/Brand" component={Brand} />
			</Router>
    );
  }
}