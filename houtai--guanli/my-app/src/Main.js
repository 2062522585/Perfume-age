import React from "react";
import Nav from './Nav.js';
import MyContent from './MyContent.js'
import loginCookie from './loginCookie.js'

import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            page: "1"
        }
    }
    diapatch(key) {
        console.log(key);
        this.setState({
            page: key
        })
    }
    render() {
        return (
            <div>
                <loginCookie />
                <Layout>
                    <Header style={{ color: "white", fontSize: "20px", textAlign: "center" }}>后台管理主页</Header>
                    <Layout>
                        <Sider style={{ backgroundColor: "white" }}>
                            <Nav app={this} />
                        </Sider>
                        <Content>
                            <MyContent page={this.state.page} />
                        </Content>
                    </Layout>
                </Layout>

            </div>
        );
    }
}