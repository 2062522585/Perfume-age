import React from 'react';
import axios from 'axios';
import '../../css/addperfume.css'

export default class AddPerfume extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            price: '',
            msg: '',
            class1: '',
            pinfen: '',
            id: '',
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

    login() {
        // 得到输入的结果
        console.log(this.state.imgUrl, this.state.title, this.state.price, this.state.msg, this.state.class1, this.state.pinfen);
        axios.post('http://localhost:7001/uploadTry', {
            img: this.state.imgUrl,
            title: this.state.title,
            price: this.state.price,
            msg: this.state.msg,
            class1: this.state.class1,
            pinfen: this.state.pinfen,
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        alert("上传成功")
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

    render() {

        return <div className="addproduct">
            <div>
                <input type="file" id="choose" /><br />
                <img src={this.state.imgUrl} id="newImg" />
                <button onClick={this.updateFile.bind(this)}>上传</button><br />
            </div>

            <div className="biaodan">
                标 &nbsp;&nbsp;&nbsp;题：<input value={this.state.title} onChange={this.title.bind(this)} />
				价 &nbsp;&nbsp;&nbsp;格：<input type='number' value={this.state.price} onChange={this.price.bind(this)} /><br />
				信 &nbsp;&nbsp;&nbsp;息：<input value={this.state.msg} onChange={this.msg.bind(this)} />
				分 &nbsp;&nbsp;&nbsp;类：<input value={this.state.class1} onChange={this.class1.bind(this)} /><br />
				评 &nbsp;&nbsp;&nbsp;分：<input type='number' value={this.state.pinfen} onChange={this.pinfen.bind(this)} /><br />
                <br />
                <button onClick={this.login.bind(this)}>提交</button>
            </div>

        </div>
    }

}
