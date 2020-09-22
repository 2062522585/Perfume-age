import React from 'react';
import axios from 'axios';
import { Table } from 'antd';
import '../../css/perfume.css';

export default class Perfume extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            img: '',
            title: '',
            price: '',
            msg: '',
            class1: '',
            pinfen: '',
            id: '',
        }
    }
    componentDidMount() {
        this.adminGettry();
    }

    async adminGettry() {
        let url = "http://localhost:7001/adminGettry"
        let r = await axios.get(url);
        let list = r.data;
        this.setState({
            list: list
        })
    }

    delTry(e) {
        console.log(e.target.value)
        axios.get("http://localhost:7001/delTry", {
            params: {
                id: e.target.value
            }
        }).then((res) => {
            console.log("请求成功!")
        }).catch((err) => {
            console.log("err请求失败")
        })
        this.adminGettry();
    }

    close() {
        document.getElementById('inputbox').style.display = 'none';
    }
    updata(e) {
        console.log(e.target.value)
        document.getElementById('inputbox').style.display = e.target.value ? 'block' : 'none';
        this.setState({
            id: e.target.value
        })
        this.adminGettry();
    }
    updataOk(e) {
        console.log(e.target.value)
        this.updataTry(e.target.value)
        this.adminGettry();
    }


    title(e) {
        this.setState({
            title: e.target.value
        })
    }
    price(e) {
        this.setState({
            price: e.target.value
        })
    }
    msg(e) {
        this.setState({
            msg: e.target.value
        })
    }
    class1(e) {
        this.setState({
            class1: e.target.value
        })
    }
    pinfen(e) {
        this.setState({
            pinfen: e.target.value
        })
    }

    updataTry(id) {
        // 得到输入的结果
        console.log(this.state.title, this.state.price, this.state.msg, this.state.class1, this.state.pinfen);
        axios.get('http://localhost:7001/updataTry', {
            params: {
                id: id,
                title: this.state.title,
                price: this.state.price,
                msg: this.state.msg,
                class1: this.state.class1,
                pinfen: this.state.pinfen,
            }

        })
            .then(function (response) {
                console.log("请求成功");
            })
            .catch(function (error) {
                console.log("请求失败");
            });
        alert("修改成功！")
    }

    render() {
        const data = [];
        this.data = this.state.list;
        console.log(this.data)
        for (let i = 0; i < this.data.length; i++) {
            // console.log(this.data[i])
            data.push({
                key: i,
                img: this.data[i].img,
                title: this.data[i].title,
                price: this.data[i].price,
                msg: this.data[i].msg,
                class1: this.data[i].class1,
                pinfen: this.data[i].pinfen,
                operation: this.data[i].id,
            });
        }
        const columns = [
            {
                title: 'img',
                width: 100,
                dataIndex: 'img',
                key: 'img',
                fixed: 'left',
                render: (record) => <img src={record} alt="" width="100px" height="100px" />
            },
            {
                title: 'title',
                width: 100,
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: 'price',
                dataIndex: 'price',
                key: 'price',
                width: 150,
            },
            {
                title: 'msg',
                dataIndex: 'msg',
                key: 'msg',
                width: 150,
            },
            {
                title: '分类',
                dataIndex: 'class1',
                key: 'class1',
                width: 150,
            },
            {
                title: '评分',
                dataIndex: 'pinfen',
                key: 'pinfen',
                width: 150,
            },
            {
                title: '操作',
                key: 'operation',
                dataIndex: 'operation',
                fixed: 'right',
                width: 100,
                render: (record) => <a>
                    <button value={record} onClick={this.delTry.bind(this)}>删除</button>
                    <button value={record} onClick={this.updata.bind(this)}>修改</button>
                </a>,
            },
        ];
        return <div className="yemian">
            <Table columns={columns} dataSource={data} scroll={{ x: 1200, y: 450 }} />,
			<div id='inputbox' className="box">
                <span>修改信息</span>
                <button className='x' onClick={this.close.bind(this)}>×</button><br />
				标 &nbsp;&nbsp;&nbsp;题：<input value={this.state.title} onChange={this.title.bind(this)} /><br />
				价 &nbsp;&nbsp;&nbsp;格：<input type='number' value={this.state.price} onChange={this.price.bind(this)} /><br />
				信 &nbsp;&nbsp;&nbsp;息：<input value={this.state.msg} onChange={this.msg.bind(this)} /><br />
				分 &nbsp;&nbsp;&nbsp;类：<input value={this.state.class1} onChange={this.class1.bind(this)} /><br />
				评 &nbsp;&nbsp;&nbsp;分：<input type='number' value={this.state.pinfen} onChange={this.pinfen.bind(this)} /><br />
                <button className="quedin" value={this.state.id} onClick={this.updataOk.bind(this)}>确定</button>

            </div>
        </div>
    }
}
