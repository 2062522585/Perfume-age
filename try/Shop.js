import React, {Component} from "react"
import './Shop.css'
import axios from 'axios';
import { Drawer, Button, Radio, Space } from 'antd';
import { Link } from "react-router-dom"; 
export default class Shop extends Component{
	constructor(props) {
		super(props);
		this.state={
			data:{},
			isShow:'none',
			num:1,
			arr:[{str:"0.2ml无喷【基础十款】",id:1},{str:"0.5ml无喷【基础十款】",id:2},
			{str:"1ml无喷【基础十款】",id:3},{str:"22ml无喷【基础十款】",id:4},
			{str:"3ml无喷【基础十款】",id:5},{str:"0.2ml无喷【高阶八款】",id:6},
			{str:"0.5ml无喷【高阶八款】",id:7},{str:"1ml无喷【高阶八款】",id:8},
			{str:"2ml无喷【高阶八款】",id:9},
							],
			// price:5,
			 yixuan:''				
		 }	
	}
	componentWillMount(){
		// let id=this.props.location.query.id
		// sessionStorage.setItem("data",id)
	
		this.getshop(7)
	}
	
	getshop(id){
		console.log(id)
		axios.get("http://127.0.0.1:7001/getshop",{
                 params:{
					 id:id
				 }
		}).then(res=>{
			this.setState({
				data:res.data[0]		
			})
			console.log(this.state.data)
		}).catch(err=>{
			alert("失败")
		})
	}
     
	addgoods(){
		this.setState({
			isShow:'block',
		
		})
	}
	addnum(){
		let num=this.state.num;
		   num++;
		   this.setState({
			num:num
		})
	}
	subnum(){
		let num=this.state.num;
		   
		   if(num>1){
			num--;
		   }else{
			   num=1
		   }
		   this.setState({
			num:num
		  })
	}
     xuanze(){
		return this.state.arr.map(data=>{
			return <span onClick={this.showdata.bind(this,data.str,data.id)}>{data.str}</span>
			
		})
	 }
	 showdata(str,id){
		 let price=this.state.data.price*id;
		 console.log(price)
		this.setState({
			yixuan:str,
			price:price
		  })
	 }
	render() {
	
		return (
			<>
		<div className="shopping" >
			<div className="shopping-conntent">
				<div className="nav">
		           <img src={this.state.data.img} className="shop-img"/>
		   <h1 className="price">￥{this.state.data.price}-{this.state.data.price*8}</h1>
	                        	<span className="title">{this.state.data.title}</span>
				  </div>
				  <div className="center">
					  <p>选择<span>请选择型号</span></p>
					  <p>配送<span>发货至 四川省-成都市</span></p>
					  <p>运费<span>10.0元起, 满150元包邮</span></p>
					  <p>极速<span>【提醒】你有88元支付礼包待领取</span></p>
				  </div>
				<div className="shopfoot">
				<div className="shopfoot-box">
					<div className="shopfoot-1">
					<span className="span1"><Link to="/Try" className="return">店铺</Link></span>
                     <span className="span1">联系店家</span><br/>
					 <span className="span1">购物车</span>
				    </div>
				<div className="shopfoot-2" onClick={this.addgoods.bind(this)} >
				      加入购物车
					</div>
				<div className="shopfoot-3">立即购买</div>
				</div>
				<div className="shopfoot2-show" style={{display:this.state.isShow}}>
					<div className="change">
					<img src={this.state.data.img} className="show-img21"/>
					< div className="were">
					<span className="span-price">￥{this.state.price}</span>
                             <br/>
		              <span className="yicuan">已选：{this.state.yixuan}</span>
					   </div>
					   <div className="chicun" >
						  {this.xuanze()}
					   </div>
					   <div className="numb">
						   数量
						   <div className="numb-box">
						   <button onClick={this.subnum.bind(this)}>-</button>
		                       <span>{this.state.num}</span>
							   <button onClick={this.addnum.bind(this)}>+</button>
							   
						   </div>
		             <span>总价:{this.state.num*this.state.price}</span>
					   </div>
		
					   <span className="sure" >确定</span>
					</div>
				</div>
					
				</div>
			</div>
	
		</div>
		</>
			
		)
	}
}