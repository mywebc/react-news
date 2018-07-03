import React from "react";
import Header from "antd/lib/calendar/Header";
import { Row, Col, Icon } from 'antd';

export default class PCFooter extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        &copy;&nbsp;2018 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        )
    }
}