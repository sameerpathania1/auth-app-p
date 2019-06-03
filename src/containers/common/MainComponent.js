import React, { Component } from 'react';
import CustomNav from './CustomNav';
import SideBar from './Sidebar';
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
                        <Row style={{ marginTop: 55 }}>
                            <Col xs={12} sm={2} md={2} style={{ padding: 0 }}>
                                <SideBar {...this.props} />
                            </Col>
                            <Col xs={12} sm={10} md={10} style={{ padding: 0 }}>
                                <div className="body-wrapper">
                                    {this.props.children}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MainComponent;