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
		this.GetTopic();
	}

	async GetTopic() {
		let url = "http://localhost:7001/Gettopic"
		let r = await axios.get(url);
		let a = r.data;
		this.setState({
			list: a
		})
		console.log(this.state.list)
	}

	deltopic(e) {
		console.log(e.target.value)
		axios.get("http://localhost:7001/deltopic", {
			params: {
				id: e.target.value
			}
		}).then((res) => {
			console.log("请求成功!")
		}).catch((err) => {
			console.log("err请求失败")
		})
		this.GetTopic();
	}

	render() {
		const columns = [
			{
				title: '话题图片',
				width: 150,
				dataIndex: 'topicimg',
				key: 'topicimg',
				render: (record) => <img src={record} alt="" width="80px" />
			},
			{
				title: '标题',
				dataIndex: 'topicname',
				key: 'topicname',
				width: 150,
			},
			{
				title: '信息介绍',
				dataIndex: 'introduction',
				key: 'introduction'
			},
			{
				title: 'Action',
				key: 'id',
				dataIndex: 'id',
				fixed: 'right',
				width: 100,
				render: (record) => <a>
					<button value={record} onClick={this.deltopic.bind(this)}>删除</button>
				</a>,
			},
		];

		const data = [];
		this.data = this.state.list;
		for (let i = 0; i < this.data.length; i++) {
			data.push({
				key: i,
				id: this.data[i].id,
				topicimg: this.data[i].topicimg,
				topicname: this.data[i].topicname,
				introduction: this.data[i].Introduction,
			});
		}

		return <div>
			<Table columns={columns} dataSource={data} scroll={{ x: 1100, y: 450 }} />
		</div>
	}
}
