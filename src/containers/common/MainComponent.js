import React, { Component } from 'react';
import CustomNav from './CustomNav';
import SideBar from './Sidebar';
import ShowProducts from '../Products/ShowProducts';
import { Row, Col, Container } from 'react-bootstrap';


class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={12} style={{ padding: 0 }}>
                        <CustomNav {...this.props} />
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <Row>
                            <Col xs={12} sm={1} md={1}>
                                <SideBar {...this.props} />
                            </Col>
                            <Col xs={12} sm={11} md={11} style={{ marginLeft: 200 }}>
                                {this.props.children}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>)
    }
}

export default MainComponent;