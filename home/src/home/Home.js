import React from 'react';
import { Carousel } from 'antd';
import "./css/home.css"
import Inf from "./inf";
import swiper1 from "../img/swiper1.jpg";
import swiper2 from "../img/swiper2.jpg";
import swiper3 from "../img/swiper3.jpg";
import swiper4 from "../img/swiper4.jpg";
import swiper5 from "../img/swiper5.jpg";
import swiper6 from "../img/swiper6.jpg";
import { BackTop } from 'antd';
import axios from 'axios';

export default class School extends React.Component {
	constructor() {
		super();
		this.state={
			list:[]
		}
	}
	componentDidMount(){
		this.getTc()
	}
	async getTc(){
		let url = "http://localhost:7001/getTc"
		let r = await axios.get(url);
		let list = r.data;
		this.setState({
			list:list
		})
	}
	 
	tcimg(){
		return this.state.list.map(item=>{
			return (
				<li>
					<img src={item.topicimg} />
					<p>{item.topicname}</p>
				</li>
			)
		})
	}

	render() {
		return (
			<>
				<div className="hbox">
					<Carousel autoplay>
						<div>
							<img src={swiper1} />
						</div>
						<div>
							<img src={swiper2} />
						</div>
						<div>
							<img src={swiper3} />
						</div>
						<div>
							<img src={swiper4} />
						</div>
						<div>
							<img src={swiper5} />
						</div>
						<div>
							<img src={swiper6} />
						</div>
					</Carousel>

					<ul className="hulone">
						{this.tcimg()}
					</ul>

					<Inf />
				</div>
				
				<div className="footer">
						<div className="banquan">
							香水时代网所有产品设计及其展示形式，独家文字，均已受版权或产权保护。<br />
							官方产品图及商标知识产权归品牌所有。香水评论均为本网会员上传，著作权归原作者所有，不代表本站立场。<br />
							未经授权禁止转载、摘编、复制或建立镜像，违者将依法追究责任，特此声明。
						</div>
						<div style={{height:"30px"}}></div>
						<div>
							<a href="#">使用协议</a> |  
							<a href="#">&nbsp;豫ICP备14010206号-1</a> | 
							<a href="#">&nbsp;豫公网安备 41010302002571号</a>
						</div>
						<div className="footerright">
							<img src="https://img.xssdcdn.com/static/appbarcode.png" />
							<img src="https://img.xssdcdn.com/static/wxbarcode.png" style={{marginLeft:"40px"}} />
							<div style={{fontSize:"12px",color:"#8788a3"}}>
								Copyright © 2020 NoseTime.com <br />
								All rights reserved.<br />
								contact@nosetime.com
							</div>
						</div>
				</div>
				<BackTop style={{borderColor:"lightblue"}} />
			</>
		)
	}
}
