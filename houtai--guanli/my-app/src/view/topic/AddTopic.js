import React from 'react';
import axios from 'axios';
import '../../css/addtopic.css'

export default class AddPerfume extends React.Component {
    constructor() {
        super();
        this.state = {
            introduction: '',
            topicname: '',
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
        axios.post('http://localhost:7001/uploadTopic', {
            topicimg: this.state.imgUrl,
            topicname: this.state.topicname,
            introduction: this.state.introduction,
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        alert("上传成功")
    }

    topicname(e) {
        this.setState({
            topicname: e.target.value
        })
    }
    introduction(e) {
        this.setState({
            introduction: e.target.value
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
                专&nbsp;&nbsp;&nbsp;题：<input value={this.state.topicname} onChange={this.topicname.bind(this)} /><br />
                介&nbsp;&nbsp;&nbsp;绍：<input value={this.state.introduction} onChange={this.introduction.bind(this)} />
                <br />
                <button onClick={this.login.bind(this)}>提交</button>
            </div>

        </div>
    }

}
