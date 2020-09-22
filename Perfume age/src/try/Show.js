import React, { Component } from "react";
import axios from "axios";
import "./Show.css";
import { Rate } from "antd";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {},
      id: 9,
      //    props.location.query.id
    };
    this.getdata();
  }
  getdata() {
    axios
      .post("http://127.0.0.1:7001/getdata", {
        id: this.state.id,
      })
      .then((res) => {
        this.setState({
          obj: res.data[0],
        });
      })
      .catch((err) => {
        alert("失败");
      });
  }
  entershop() {
    this.props.history.push({
      pathname: "/Shop",
      query: { id: this.state.id },
    });
  }

  render() {
    return (
      <>
        <div className="Box1">
          <p className="p1">{this.state.obj.title}</p>
          <img src={this.state.obj.img} />
          <div className="div1">
            <p>
              品牌：<span>{this.state.obj.pinpai}</span>
            </p>
            <p>
              香调：<span>{this.state.obj.xiangdiao}</span>
            </p>
            <p>
              前调：<span>{this.state.obj.qiandiao}</span>
            </p>
            <p>
              中调：<span>{this.state.obj.zhongdiao}</span>
            </p>
            <p>
              后调：<span>{this.state.obj.houdiao}</span>
            </p>
            <p>
              属性：<span>{this.state.obj.shuxing}</span>
            </p>
            <p>
              调香师：<span>{this.state.obj.houdiao}</span>
            </p>
            <p>
              标签：<span>{this.state.obj.biaoqian}</span>
            </p>
          </div>

          <div className="div3">
            <span className="pinfen">
              <Rate disabled allowHalf defaultValue={4.5} />
            </span>
            <span className="span6">{this.state.obj.pinfen}分</span><br/>
               <p>5星<span className="span1"></span></p>
               <p>4星<span className="span2"></span></p>
               <p>3星<span className="span3"></span></p>
               <p>2星<span className="span4"></span></p>
               <p>1星<span className="span5"></span></p>
                
          </div>
          <div className="div2">
            <span className="span" onClick={this.entershop.bind(this)}>
              想要
            </span>
            <span className="span">闻过</span>
            <span className="span">拥有</span>
            <span className="pinfen">
              评价：
              <Rate allowHalf defaultValue={this.state.obj.pinfen} />
            </span>
          </div>
        </div>
      </>
    );
  }
}
