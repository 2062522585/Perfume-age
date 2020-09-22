import React from 'react';
import axios from 'axios';
import { Table } from 'antd';
import '../../css/product.css';

export default class Product extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [],
			brand: '',
			fragrance: '',
			top: '',
			middle: '',
			back: '',
			attr: '',
			perfumer: '',
			label: '',
			score: '',
			id: '',
		}
	}
	componentDidMount() {
		this.adminGetProduct();
	}

	async adminGetProduct() {
		let url = "http://localhost:7001/adminGetProduct"
		let r = await axios.get(url);
		let list = r.data;
		this.setState({
			list: list
		})
	}

	del(e) {
		console.log(e.target.value)
		axios.get("http://localhost:7001/delpro", {
			params: {
				id: e.target.value
			}
		}).then((res) => {
			console.log("请求成功!")
		}).catch((err) => {
			console.log("err请求失败")
		})
		this.adminGetProduct();
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
		this.adminGetProduct();
	}
	updataOk(e) {
		// console.log(this.state.id)
		console.log(e.target.value)
		this.updatePro(e.target.value)
	}
	name(e) {
		this.setState({
			brand: e.target.value
		})
	}
	xiangdiao(e) {
		this.setState({
			fragrance: e.target.value
		})
	}
	topdiao(e) {
		this.setState({
			top: e.target.value
		})
	}
	middlediao(e) {
		this.setState({
			middle: e.target.value
		})
	}
	backdiao(e) {
		this.setState({
			back: e.target.value
		})
	}
	attrbute(e) {
		this.setState({
			attr: e.target.value
		})
	}
	teacher(e) {
		this.setState({
			perfumer: e.target.value
		})
	}
	biaoqian(e) {
		this.setState({
			label: e.target.value
		})
	}
	pinfen(e) {
		this.setState({
			score: e.target.value
		})
	}
	updatePro(id) {
		// 得到输入的结果
		console.log(this.state.brand, this.state.fragrance, this.state.top, this.state.middle, this.state.back, this.state.attr, this.state.perfumer, this.state.label, this.state.score);
		axios.get('http://localhost:7001/updataPro', {
			params: {
				id: id,
				brand: this.state.brand,
				fragrance: this.state.fragrance,
				top: this.state.top,
				middle: this.state.middle,
				back: this.state.back,
				attr: this.state.attr,
				perfumer: this.state.perfumer,
				label: this.state.label,
				score: this.state.score
			}

		})
			.then(function (response) {
				console.log("请求成功");
			})
			.catch(function (error) {
				console.log("请求失败");
			});
		this.adminGetProduct();
		alert("修改成功！")
	}

	render() {
		const data = [];
		this.data = this.state.list;
		// console.log(this.data)
		for (let i = 0; i < this.data.length; i++) {
			// console.log(this.data[i])
			data.push({
				key: i,
				brand: this.data[i].brand,
				proimg: this.data[i].proimg,
				fragrance: this.data[i].fragrance,
				top: this.data[i].top,
				middle: this.data[i].middle,
				back: this.data[i].back,
				attr: this.data[i].attr,
				perfumer: this.data[i].perfumer,
				label: this.data[i].label,
				score: this.data[i].score,
				operation: this.data[i].id,
			});
		}
		const columns = [
			{
				title: '品牌',
				width: 100,
				dataIndex: 'brand',
				key: 'brand',
				fixed: 'left',
			},
			{
				title: '香水图片',
				width: 100,
				dataIndex: 'proimg',
				key: 'proimg',
				render: (record) => <img src={record} alt="" width="100px" />
			},
			{
				title: '香调',
				dataIndex: 'fragrance',
				key: 'fragrance',
				width: 150,
			},
			{
				title: '前调',
				dataIndex: 'top',
				key: 'top',
				width: 150,
			},
			{
				title: '中调',
				dataIndex: 'middle',
				key: 'middle',
				width: 150,
			},
			{
				title: '后调',
				dataIndex: 'back',
				key: 'back',
				width: 150,
			},
			{
				title: '属性',
				dataIndex: 'attr',
				key: 'attr',
				width: 150,
			},
			{
				title: '调香师',
				dataIndex: 'perfumer',
				key: 'perfumer',
				width: 150,
			},
			{
				title: '标签',
				dataIndex: 'label',
				key: 'label',
				width: 150,
			},
			{ title: '评分', dataIndex: 'score', key: 'score' },
			{
				title: '操作',
				key: 'operation',
				dataIndex: 'operation',
				fixed: 'right',
				width: 100,
				render: (record) => <a>
					<button value={record} onClick={this.del.bind(this)}>删除</button>
					<button value={record} onClick={this.updata.bind(this)}>修改</button>
				</a>,
			},
		];
		return <div className="yemian">
			<Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 450 }} />,
			<div id='inputbox' className="box">
				<span>修改信息</span>
				<button className='x' onClick={this.close.bind(this)}>×</button><br />
				品  &nbsp;&nbsp;&nbsp;牌 ：<input value={this.state.brand} onChange={this.name.bind(this)} /><br />
				香  &nbsp;&nbsp;&nbsp;调 ：<input value={this.state.fragrance} onChange={this.xiangdiao.bind(this)} /><br />
				前 &nbsp;&nbsp;&nbsp;调 ：<input value={this.state.top} onChange={this.topdiao.bind(this)} /><br />
				中  &nbsp;&nbsp;&nbsp;调 ：<input value={this.state.middle} onChange={this.middlediao.bind(this)} /><br />
				后  &nbsp;&nbsp;&nbsp;调 ：<input value={this.state.back} onChange={this.backdiao.bind(this)} /><br />
				属  &nbsp;&nbsp;&nbsp;性 ：<input value={this.state.attr} onChange={this.attrbute.bind(this)} /><br />
				调香师：<input value={this.state.perfumer} onChange={this.teacher.bind(this)} /><br />
				标 &nbsp;&nbsp;&nbsp;签 ：<input value={this.state.label} onChange={this.biaoqian.bind(this)} /><br />
				评  &nbsp;&nbsp;&nbsp;分 ：<input type='number' value={this.state.score} onChange={this.pinfen.bind(this)} /><br />
				<button className="quedin" value={this.state.id} onClick={this.updataOk.bind(this)}>确定</button>

			</div>
		</div>
	}
}
