import React from 'react';
import axios from 'axios';
import '../../css/addpro.css'

export default class School extends React.Component {
	constructor() {
		super();
		this.state = {
			brand: '',
			fragrance: '',
			top: '',
			middle: '',
			back: '',
			attr: '',
			perfumer: '',
			label: '',
			score: '',
			imgUrl: ''
		}
	}
	updateFile() {
		let axiosupload = async () => {
			let file = document.getElementById("choose").files[0];
			let formData = new FormData();
			formData.append("uploadFile", file, file.name);
			const config = {
				headers: {
					"Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
				}
			};
			let response = await axios.post("http://localhost:7001/upload.do", formData, config)
			let a = response.data;
			this.setState({
				imgUrl: a
			})
			console.log(this.state.imgUrl)
		}
		axiosupload();
	}

	changeState() {
		this.setState({
			inf: '新信息'
		})
	}
	login() {
		// 得到输入的结果
		console.log(this.state.imgUrl, this.state.brand, this.state.fragrance, this.state.top, this.state.middle, this.state.back, this.state.attr, this.state.perfumer, this.state.label, this.state.score);
		axios.post('http://localhost:7001/uploadProduct', {
			proimg: this.state.imgUrl,
			brand: this.state.brand,
			fragrance: this.state.fragrance,
			top: this.state.top,
			middle: this.state.middle,
			back: this.state.back,
			attr: this.state.attr,
			perfumer: this.state.perfumer,
			label: this.state.label,
			score: this.state.score
		})
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
		alert("上传成功！")
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

	render() {

		return <div className="addproduct">
			<div>
				<input type="file" id="choose" /><br />
				<img src={this.state.imgUrl} id="newImg" />
				<button onClick={this.updateFile.bind(this)}>上传</button><br />
			</div>

			<div className="biaodan">
				品 &nbsp;&nbsp;&nbsp;牌：<input value={this.state.brand} onChange={this.name.bind(this)} />
				香 &nbsp;&nbsp;&nbsp;调：<input value={this.state.fragrance} onChange={this.xiangdiao.bind(this)} /><br />
				前 &nbsp;&nbsp;&nbsp;调：<input value={this.state.top} onChange={this.topdiao.bind(this)} />
				中 &nbsp;&nbsp;&nbsp;调：<input value={this.state.middle} onChange={this.middlediao.bind(this)} /><br />
				后 &nbsp;&nbsp;&nbsp;调：<input value={this.state.back} onChange={this.backdiao.bind(this)} />
				属 &nbsp;&nbsp;&nbsp;性：<input value={this.state.attr} onChange={this.attrbute.bind(this)} /><br />
				调香师：<input value={this.state.perfumer} onChange={this.teacher.bind(this)} />
				标 &nbsp;&nbsp;&nbsp;签：<input value={this.state.label} onChange={this.biaoqian.bind(this)} /><br />
				评 &nbsp;&nbsp;&nbsp;分：<input type='number' value={this.state.score} onChange={this.pinfen.bind(this)} />
				<br />
				<button onClick={this.login.bind(this)}>提交</button>
			</div>

		</div>
	}

}
