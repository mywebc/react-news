import React from "react";
import Header from "antd/lib/calendar/Header";
import { Row, Col, Button, Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCHeader extends React.Component {
    state = {
        current: '1',
    }
    // react组件里面并没有手动绑定this,以下写法是一种解决方案.
    handleClick = (e) => {
        this.setState({
          current: e.key,
        });
      }
    render() {
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                        <img src="news.png" alt="logo"/>
                        <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu 
                        mode="horizontal"
                        selectedKeys={[this.state.current]}
                        onClick={this.handleClick} 
                        >
                            <Menu.Item key="1">
                                <Icon type="mail" />头条
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="mail" />国际
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="mail" />娱乐
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="mail" />抖音
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="mail" />斗鱼
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="mail" />安排
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Icon type="mail" />雄起
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}