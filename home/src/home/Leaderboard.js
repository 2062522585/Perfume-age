import React from 'react';
import "./css/leaderboard.css"
import {StarFilled} from '@ant-design/icons';
import axios from 'axios';

export default class School extends React.Component {
	constructor() {
		super();
		this.state={
			leftlist:[],
			rightlist:[]
		}
	}
	componentDidMount() {
		this.getLeaderleft();
		this.getLeaderright();
	}
	//排行榜左边
	async getLeaderleft(){
		let url="http://localhost:7001/getLeaderleft"
		let r=await axios.get(url);
		let leftlist=r.data;
		this.setState({
			leftlist:leftlist
		})
		
	}
	leftLeaderimg(){
		return this.state.leftlist.map(item=>{
			return <img src={item.img} />
		})
	}
	leftLeadertitle(){
		return this.state.leftlist.map(item=>{
			return <p style={{color:"#555"}}>{item.title}</p>
		})
	}
	leftLeaderfen(){
		return this.state.leftlist.map(item=>{
			return <span>{item.pinfen}</span>
		})
	}
	//排行榜右边
	async getLeaderright(){
		let url="http://localhost:7001/getLeaderright"
		let r=await axios.get(url);
		let rightlist=r.data;
		this.setState({
			rightlist:rightlist
		})
		
	}
	rightLeaderimg(){
		return this.state.rightlist.map(item=>{
			return <img src={item.img} />
		})
	}
	rightLeadertitle(){
		return this.state.rightlist.map(item=>{
			return <p style={{color:"#555"}}>{item.title}</p>
		})
	}
	rightLeaderfen(){
		return this.state.rightlist.map(item=>{
			return <span>{item.pinfen}</span>
		})
	}
	//点击跳转到试香中心
	lechange(){
		this.props.history.push("/Try");
	}
	 
	render() {
		return (
			<>
			<div className="leaderbox">
				<div className="leaderleft">
					<div className="topspan">商业香水Top1-5</div>
					<p style={{color:"#444"}}><b>什么是商业香水：</b>香奈儿、迪奥、爱马仕无疑就是我们所熟知的大众品牌了，一般来说都是香水与时装品牌的结合。喜欢大众品牌的原因可能跟讨厌它们的原因一样，他们的Logo可以拿来晒朋友圈，他们的香味经常会被闻到，好穿、实用、接受度高是它们的特点。</p>
					<ul>
						<li>
							<div className="number">1</div>
							{this.leftLeaderimg()[0]}
							<div>
								{this.leftLeadertitle()[0]}
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<span>&nbsp;&nbsp;{this.leftLeaderfen()[0]}分 11997人评价</span>
							</div>
						</li>
						<li>
							<div className="number">2</div>
							{this.leftLeaderimg()[1]}
							<div>
								{this.leftLeadertitle()[1]}
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<span>&nbsp;&nbsp;{this.leftLeaderfen()[1]}分 3608人评价</span>
							</div>
						</li>
						<li>
							<div className="number">3</div>
							{this.leftLeaderimg()[2]}
							<div>
								{this.leftLeadertitle()[2]}
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<span>&nbsp;&nbsp;{this.leftLeaderfen()[2]}分 10333人评价</span>
							</div>
						</li>
						<li>
							<div className="number">4</div>
							{this.leftLeaderimg()[3]}
							<div>
								{this.leftLeadertitle()[3]}
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<span>&nbsp;&nbsp;{this.leftLeaderfen()[3]}分 9550人评价</span>
							</div>
						</li>
						<li>
							<div className="number">5</div>
							{this.leftLeaderimg()[4]}
							<div>
								{this.leftLeadertitle()[4]}
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<span>&nbsp;&nbsp;{this.leftLeaderfen()[4]}分 967人评价</span>
							</div>
						</li>
					</ul>
				
					<p className="tiaozhuan" onClick={this.lechange.bind(this)}>👉试香中心</p>
				</div>

				<div className="midleline"></div>
				
				<div className="leaderright">
					<div className="topspan">商业香水 Top6-10</div>
					<p style={{color:"#444"}}><b>什么是沙龙香水：</b>沙龙香水一般都是专业做香水的品牌，而且拥有一定的历史，不注重瓶身设计，很多都用统一的香水瓶。由于它们不需要或者不屑与大众品牌去拼销量，这意味着他们不太会迎合大众消费者的口味，这样在创作方面就摆脱了很多束缚。个性、创意、与众不同是它们的特点。</p>
					<ul>
						<li>
							<div className="number">1</div>
							{this.rightLeaderimg()[0]}
							<div>
								{this.rightLeadertitle()[0]}
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
								<span>&nbsp;&nbsp;{this.rightLeaderfen()[0]}分 3047人评价</span>
							</div>
						</li>
						<li>
							<div className="number">2</div>
							{this.rightLeaderimg()[1]}
							<div>
								{this.rightLeadertitle()[1]}
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
								<span>&nbsp;&nbsp;{this.rightLeaderfen()[1]}分 1371人评价</span>
							</div>
						</li>
						<li>
							<div className="number">3</div>
							{this.rightLeaderimg()[2]}
							<div>
								{this.rightLeadertitle()[2]}
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
								<span>&nbsp;&nbsp;{this.rightLeaderfen()[2]}分 2202人评价</span>
							</div>
						</li>
						<li>
							<div className="number">4</div>
							{this.rightLeaderimg()[3]}
							<div>
								{this.rightLeadertitle()[3]}
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
								<span>&nbsp;&nbsp;{this.rightLeaderfen()[3]}分 1600人评价</span>
							</div>
						</li>
						<li>
							<div className="number">5</div>
							{this.rightLeaderimg()[4]}
							<div>
								{this.rightLeadertitle()[4]}
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
								<span>&nbsp;&nbsp;{this.rightLeaderfen()[4]}分 3181人评价</span>
							</div>
						</li>
					</ul>
				
					<p className="tiaozhuan" onClick={this.lechange.bind(this)}>👉试香中心</p>
				</div>
			</div>
			<div className="footer">
				<div className="banquan">
					香水时代网所有产品设计及其展示形式，独家文字，均已受版权或产权保护。<br />
					官方产品图及商标知识产权归品牌所有。香水评论均为本网会员上传，著作权归原作者所有，不代表本站立场。<br />
					未经授权禁止转载、摘编、复制或建立镜像，违者将依法追究责任，特此声明。
				</div>
				<div style={{height:"30px"}}></div>
				<div className="footerright">
					<img src="https://img.xssdcdn.com/static/appbarcode.png" />
					<img src="https://img.xssdcdn.com/static/wxbarcode.png" style={{marginLeft:"40px"}} />
					<div style={{fontSize:"12px",color:"#8788a3"}}>
						Copyright © 2020 NoseTime.com <br />
						All rights reserved.
					</div>
				</div>
			</div>
			</>
		)
	}
}
