import React from 'react';
import { Menu } from 'antd';
import {
	AppstoreOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	PieChartOutlined,
	DesktopOutlined,
	ContainerOutlined,
	MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class Nav extends React.Component {
	constructor() {
		super();
		this.state = {
			page: "1",
			collapsed: false
		}
	}

	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	getpage(e) {
		// 获取点击事件的Key值，调用父组件的方法传递获取的值
		console.log(e.key)
		this.props.app.diapatch(e.key);
	}

	render() {
		return (
			// mode="horizontal"是水平显示
			// mode="inline"是垂直显示
			<>
				<div >
					<Menu
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						mode="inline"
						theme="dark"
						inlineCollapsed={this.state.collapsed}
						onClick={this.getpage.bind(this)}
						style={{ height: "600px" }}
					>
						<Menu.Item key="1" icon={<PieChartOutlined />}>
							用户评论
          </Menu.Item>
						<Menu.Item key="2" icon={<DesktopOutlined />}>
							用户管理
          </Menu.Item>
						<SubMenu key="sub1" icon={<MailOutlined />} title="话题管理">
							<Menu.Item key="3">话题界面</Menu.Item>
							<Menu.Item key="4">话题增加</Menu.Item>
						</SubMenu>
						<SubMenu key="sub2" icon={<AppstoreOutlined />} title="产品合集管理">
							<SubMenu key="sub3" title="产品管理">
								<Menu.Item key="5">商品界面</Menu.Item>
								<Menu.Item key="6">商品增加</Menu.Item>
							</SubMenu>
							<SubMenu key="sub4" title="合集管理">
								<Menu.Item key="7">香水界面</Menu.Item>
								<Menu.Item key="8">香水增加</Menu.Item>
							</SubMenu>
						</SubMenu>
					</Menu>
				</div>
			</>
		);
	}
}




