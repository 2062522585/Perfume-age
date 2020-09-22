import React from 'react';
import "./css/Topic.css";
import { Pagination } from 'antd';
import axios from 'axios';

export default class School extends React.Component {
	constructor() {
		super();
		this.state={
			a1:1,
			a2:2,
			a3:3,
			a4:4,
			a5:5,
			arr:[{
				Introduction: "",
				id: 1,
				topicimg: "",
				topicname: ""
			},
			{
				Introduction: "",
				id: 1,
				topicimg: "",
				topicname: ""
			},
			{
				Introduction: "",
				id: 1,
				topicimg: "",
				topicname: ""
			},
			{
				Introduction: "",
				id: 1,
				topicimg: "",
				topicname: ""
			},
			{
				Introduction: "",
				id: 1,
				topicimg: "",
				topicname: ""
			}
			]
		};
		this.getarr();
	}
	async getarr(){
		let url="http://127.0.0.1:7001/topic.do";
		let res=await axios.post(url,{
			a1:this.state.a1,
			a2:this.state.a2,
			a3:this.state.a3,
			a4:this.state.a4,
			a5:this.state.a5
			});
		let list=res.data;
	         this.setState({
			 arr:list,
			 });
	     }
	 async onChange(page){
		 console.log(this)
		let url="http://127.0.0.1:7001/topic.do";
		let res=await axios.post(url,{
			a1:page*5-4,
			a2:page*5-3,
			a3:page*5-2,
			a4:page*5-1,
			a5:page*5
			});
		let list=res.data;
		     this.setState({
			 arr:list,
			 });
	}
	render() {
		return 	  <div className="topic-big">
		<div className="topic-content-l">
		<div className="topic-l-content">
		<div className="topic-l-l">
		<img src={`${this.state.arr[this.state.a1-1].topicimg}`} />
		</div>
		<div className="topic-l-f">
		<h3>{this.state.arr[this.state.a1-1].topicname}</h3>
		<p>{this.state.arr[this.state.a1-1].Introduction}</p>
		</div>
		</div>
		<div className="topic-l-content">
		<div className="topic-l-l">
		<img src={`${this.state.arr[this.state.a2-1].topicimg}`} />
		</div>
		<div className="topic-l-f">
		<h3>{this.state.arr[this.state.a2-1].topicname}</h3>
		<p>{this.state.arr[this.state.a2-1].Introduction}</p>
		</div>
		</div>
		<div className="topic-l-content">
		<div className="topic-l-l">
		<img src={`${this.state.arr[this.state.a3-1].topicimg}`} />
		</div>
		<div className="topic-l-f">
		<h3>{this.state.arr[this.state.a3-1].topicname}</h3>
		<p>{this.state.arr[this.state.a3-1].Introduction}</p>
		</div>
		</div>
		<div className="topic-l-content">
		<div className="topic-l-l">
		<img src={`${this.state.arr[this.state.a4-1].topicimg}`} />
		</div>
		<div className="topic-l-f">
		<h3>{this.state.arr[this.state.a4-1].topicname}</h3>
		<p>{this.state.arr[this.state.a4-1].Introduction}</p>
		</div>
		</div>
		<div className="topic-l-content">
		<div className="topic-l-l">
		<img src={`${this.state.arr[this.state.a5-1].topicimg}`} />
		</div>
		<div className="topic-l-f">
		<h3>{this.state.arr[this.state.a5-1].topicname}</h3>
		<p>{this.state.arr[this.state.a5-1].Introduction}</p>
		</div>
		</div>
		<Pagination
			defaultPageSize={5}
			showSizeChanger={false}
		  onChange={this.onChange.bind(this)}
		  defaultCurrent={1}
		  total={50}
		/>
		</div>
		<div className="topic-content-r">
			<div className="topic-content-r-title">香水历史:</div>,
			<img src="https://img.xssdcdn.com/static/article/history.png" style={{width:"306px",height:"123px"}}/>
			<div className="topic-content-r-title">FiFi奖:</div>,
			<img src="https://img.xssdcdn.com/static/article/fifi2.png" style={{width:"306px",height:"123px"}}/>
			<div className="topic-content-r-title">分类浏览:</div>,
			<div className="topic-content-r-c">
				<div>
					<img src="https://img.xssdcdn.com/static/article/zhuanti2.png" />
					<div>专题策划</div>
				</div>
				<div>
					<img src="https://img.xssdcdn.com/static/article/zhuanti2.png" />
					<div>寻味之旅</div>
				</div>
				<div>
					<img src="https://img.xssdcdn.com/static/article/zhuanti2.png" />
					<div>香水知识</div>
				</div>
			</div>
		</div>
  </div>
	}
}

