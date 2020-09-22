import React from 'react';
import axios from 'axios';
import { Table } from 'antd';

export default class Comment extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [],
		}
	}

	componentDidMount() {
		this.Getcomment();
	}

	delcomment(e) {
		console.log(e.target.value)
		axios.get("http://localhost:7001/delcomment", {
			params: {
				id: e.target.value
			}
		}).then((res) => {
			console.log("请求成功!")
		}).catch((err) => {
			console.log("err请求失败")
		})
		this.Getcomment();
	}

	async Getcomment() {
		let url = "http://localhost:7001/Getcomment"
		let r = await axios.get(url);
		let list = r.data;
		this.setState({
			list: list
		})
	}
	render() {
		const columns = [
			{
				title: '头像',
				width: 40,
				dataIndex: 'avatar',
				key: 'avatar',
				render: (record) => <img src={record} alt="" width="80px" style={{ borderRadius: '200%' }} />
			},
			{
				title: '用户昵称',
				width: 30,
				dataIndex: 'name',
				key: 'name',
			},
			{
				title: '评论',
				dataIndex: 'problem',
				key: '1',
				width: 150,
			},
			{
				title: 'Action',
				key: 'id',
				dataIndex: 'id',
				fixed: 'right',
				width: 50,
				render: (record) => <a>
					<button value={record} onClick={this.delcomment.bind(this)}>删除</button>
				</a>,
			},
		];
		const data = [];
		this.data = this.state.list;
		for (let i = 0; i < this.data.length; i++) {
			data.push({
				key: i,
				id: this.data[i].id,
				avatar: this.data[i].avatar,
				name: this.data[i].name,
				problem: this.data[i].problem,
			});
		}
		return (
			<div>
				<Table columns={columns} dataSource={data} scroll={{ x: 1200, y: 450 }} />,
			</div>
		);
	}
}
