import React from "react";
import { Link } from  'react-router-dom'
import {
    Row,
    Col,
    Button,
    Menu,
	Tabs,
	Form,
	Input,
    Modal,
    Icon
} from 'antd';
const FormItem = Form.Item;
// const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
// const MenuItemGroup = Menu.ItemGroup;

export default class PCHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '1',
            userNickName: '',
            userid: '',
            hasLogined: false,
            modalVisible: false,
            action: 'login'         
        }
        this.handleClick =  this.handleClick.bind(this)
        this.setModalVisible = this.setModalVisible(this)
        this.callback = this.callback.bind(this)
        this.loginOut = this.loginOut.bind(this)
    }
    // react组件里面并没有手动绑定this,以下写法是一种解决方案.
    handleClick = (e) => {
        this.setState({
          current: e.key,
        });
      };
    //   控制模拟框
      setModalVisible (val) {
        this.setState({
            modalVisible: val
        })
      };
    //   模拟框中tab切换点击事件
    callback (key) {
        console.log(key)
    };
    // 退出登陆
    loginOut () {
        this.setState({userNickName: ''})
        this.setState({userid: ''})
        this.setState({hasLogined: false})
    };
    render() {
        // const { getFieldDecorator } = this.props.form;
        // const userShow = this.state.hasLogined
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
                            <Menu.Item key="7" onClick={()=>this.setModalVisible(true)}>
                                <Icon type="mail" />登陆/注册
                            </Menu.Item>
                        </Menu>
                        {/* 登陆注册模拟框 */}
                        <Modal 
                            title="欢迎登录/注册"
                            visible={this.state.modalVisible}
                            onOk={()=>this.setModalVisible(false)}
                            onCancel={()=>this.setModalVisible(false)}
                        >
                            <Tabs defaultActiveKey="1" >
                                <TabPane tab="登录" key="1">
                                    <Form onSubmit={this.handleSubmit} className="login-in">
                                        <FormItem>
                                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                        </FormItem>
                                        <FormItem>
                                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                        </FormItem>
                                    </Form>
                                </TabPane>
                                <TabPane tab="注册" key="2">
                                    <Form onSubmit={this.handleSubmit} className="register">
                                        <FormItem>
                                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                        </FormItem>
                                        <FormItem>
                                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                        </FormItem>
                                        <FormItem>
                                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                        </FormItem>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}>
                    </Col>
                </Row>
            </header>
        )
    }
}