import React from 'react';
import './Try.css'
import axios from 'axios';
import { Rate } from 'antd';
export default class Try extends React.Component{
     constructor(){
		 super();
		 this.state={
			 items:[],
			arr:[],
		 }
		 this.gettry();
		 this.getxiangshui()
	 }

	async gettry(){
		let url="http://127.0.0.1:7001/show"
		let res=await axios.post(url,{
			class1:"试香合辑"
		})
		let list=res.data
	         this.setState({
			 items:list,
			 })    
         }
 async getxiangshui(){
	let url="http://127.0.0.1:7001/show"
	let res=await axios.post(url,{
		class1:"单品分装"
	})
	 let list=res.data
		 this.setState({
		 arr:list,
		 })    
}
 entershop(id){
              
	this.props.history.push({pathname: `/Shop`, query:{id:id} });
 }
 showimg() {
//   console.log(this.state.items)
	return this.state.items.map(data=>{
        return <div className="box1-1" onClick={this.entershop.bind(this,data.id)}>
            <img src={data.img}/>
    <span>{data.title}</span>
        </div>
	})
}
showgoods() {
		return this.state.arr.map(data=>{
			return <div className="box2-1">
				<div className="div">
				<img src={data.img} onClick={this.entershop.bind(this,data.id)}/>
				</div>
				<div className="div2">
		       <span className="span1" onClick={this.entershop.bind(this,data.id)}>{data.title}</span><br/>
			   <Rate disabled allowHalf  defaultValue={data.pinfen} className="pinfen"/><br/>
			       <span className="span2">{data.msg}</span><br/>
			<span className="shop" onClick={this.entershop.bind(this,data.id)}>去购买</span>
			</div>
			</div>
		})
	}
	render() {
		return (
			<>
       
		<div className="box">
		<div className="title1">试香合辑</div>
			{this.showimg()}
			
		</div>
		<div className="box2">
			<div className="title1">单品分装</div>
			{this.showgoods()}
		</div>
		<div className="box3">
	        <p className="p1">香水时代网所有产品设计及其展示形式，独家文字，均已受版权或产权保护。</p>
			<p>官方产品图及商标知识产权归品牌所有。香水评论均为本网会员上传，著作权归原作者所有，不代表本站立场。</p>
			<p>未经授权禁止转载、摘编、复制或建立镜像，违者将依法追究责任，特此声明。</p>
			</div>
		</>
			
		)
	}
}