import React, { Component } from 'react';
import { Nav, Navbar, FormControl, Form, Button } from 'react-bootstrap';
import {removeObject} from "../../utils"
import { Homepage } from '..';

class CustomNav extends Component {
    state = {}
    logout = () => {
        removeObject("user");
        this.props.history.push("/login");
    };
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>

                        <Homepage />
                    </Form>
                </Navbar>

            </div>
        );
    }
}
export default CustomNav;