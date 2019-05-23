import React, { Component } from 'react';
import { Nav, Navbar, FormControl, Form, Button } from 'react-bootstrap';
import { removeObject, getObject } from "../../utils"

class CustomNav extends Component {
    state = {}
    logout = () => {
        removeObject("user");
        this.props.history.push("/login");
    };
    render() {
        return (
            <div>
                <Navbar style={{ position: "fixed", width: '100%', zIndex: 100 }} bg="dark" variant="dark" block>
                    <Navbar.Brand >Welcome, {getObject("user").name}</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>

                        <Button style={{
                            float: "right", border: "none", marginRight: "0px"
                        }} onClick={this.logout}>
                            Sign Out</Button>
                    </Form>
                </Navbar>

            </div>
        );
    }
}
export default CustomNav;