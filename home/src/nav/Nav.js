import React from 'react';
import "./css/Nav.css";
// import {Menu} from 'antd';

export default class Stu extends React.Component {
	constructor() {
		super();
	}
	 nowPage(e){
		 if(e.target.innerHTML=="主页"){
				this.props.history.push("/");
			 }else if(e.target.innerHTML=="排行榜"){
				 this.props.history.push("/Leaderboard");
			 }else if(e.target.innerHTML=="专题"){
				 this.props.history.push("/Topic");
			 }else if(e.target.innerHTML=="新鲜事"){
				 this.props.history.push("/NewThing");
			 }else if(e.target.innerHTML=="社区"){
				 this.props.history.push("/Community");
			 }else if(e.target.innerHTML=="新手入门"){
				 this.props.history.push("/Topic");
			 }else if(e.target.innerHTML=="试香中心"){
				 this.props.history.push("/Try");
			 }else if(e.target.innerHTML=="专下载App题"){
				 this.props.history.push("/Topic");
			 }
	 }
	render() {
		return (
			<div className="banner">
			<div className="banner-1">
				<div className="banner-11">
					<div><span>品牌</span></div>
					<div><span>香调</span></div>
					<div><span>气味</span></div>
					<div><span>调香师</span></div>
				</div>
				<div className="banner-12">
					<div><span>登录</span></div>
					<div><span>注册</span></div>
				</div>
				<div className="banner-13" style={{display:"none"}}>
					<div><span>看不见</span></div>
					<div><span>看不见</span></div>
					<div><span>看不见</span></div>
					<div><span>看不见</span></div>
				</div>
			</div>
			<div className="banner-2">
				<input className="inputc" ></input>
				<div className="inputy"></div>
			</div>
			<div className="banner-3">
				<div><span onClick={this.nowPage.bind(this)}>主页</span></div>
				<div><span onClick={this.nowPage.bind(this)}>排行榜</span></div>
				<div><span onClick={this.nowPage.bind(this)}>专题</span></div>
				<div><span onClick={this.nowPage.bind(this)}>新鲜事</span></div>
				<div><span onClick={this.nowPage.bind(this)}>社区</span></div>
				<div><span onClick={this.nowPage.bind(this)}>新手入门</span></div>
				<div><span onClick={this.nowPage.bind(this)}>试香中心</span></div>
				<div><span onClick={this.nowPage.bind(this)}>下载App</span></div>
			</div>
			</div>
		)
	}
}
