import React from 'react';
import axios from 'axios';
import { Table } from 'antd';


export default class Stu extends React.Component {
	constructor() {
		super();
		this.state = {

			list: []
		}
	}
	componentDidMount() {
		this.Getuser();
	}

	async Getuser() {
		let url = "http://localhost:7001/Getuser"
		let r = await axios.get(url);
		let a = r.data;
		this.setState({
			list: a
		})
		console.log(this.state.list)
	}

	deluser(e) {
		console.log(e.target.value)
		axios.get("http://localhost:7001/deluser", {
			params: {
				id: e.target.value
			}
		}).then((res) => {
			console.log("请求成功!")
		}).catch((err) => {
			console.log("err请求失败")
		})
		this.Getuser();
	}

	render() {
		const columns = [
			{
				title: '头像',
				width: 200,
				dataIndex: 'avatar',
				key: 'avatar',
				render: (record) => <img src={record} alt="" width="90px" height="90px" style={{ borderRadius: '100%' }} />
			},
			{
				title: '账号',
				dataIndex: 'name',
				key: 'name',
				width: 150,
			},
			{
				title: '昵称',
				dataIndex: 'username',
				key: 'username',
				width: 150,
			},
			{
				title: '密码',
				dataIndex: 'pwd',
				key: 'pwd',
				width: 100,
			},
			{
				title: '性别',
				dataIndex: 'sex',
				key: 'sex'
			},
			{
				title: 'Action',
				key: 'id',
				dataIndex: 'id',
				fixed: 'right',
				width: 100,
				render: (record) => <a>
					<button value={record} onClick={this.deluser.bind(this)}>删除</button>
				</a>,
			},
		];

		const data = [];
		this.data = this.state.list;
		for (let i = 0; i < this.data.length; i++) {
			data.push({
				key: i,
				id: this.data[i].id,
				username: this.data[i].username,
				name: this.data[i].name,
				pwd: this.data[i].pwd,
				sex: this.data[i].sex,
				avatar: this.data[i].avatar,
			});
		}

		return <div>
			<Table columns={columns} dataSource={data} scroll={{ x: 1100, y: 450 }} />
		</div>
	}
}
