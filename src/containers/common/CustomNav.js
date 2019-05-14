import React, { Component } from 'react';
import { Nav, Navbar, FormControl, Form, Button } from 'react-bootstrap';
import {removeObject} from "../../utils"

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