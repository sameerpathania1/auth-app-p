import React, { Component } from 'react';
import { Container, Col, Form, Button } from "react-bootstrap"

class CheckMail extends Component {
   state = {}
   render() {
      return (<Container fluid>
         <Col className="loginpage" xs={12} sm={4} md={{ span: 4, offset: 4 }}>
            <Col>
               <h3 style={{ textAlign: "center" }}>Please check your Mail for verification link</h3>

               <Button
                  type="submit"
                  style={{ margin: "30px 0px 170px 0px" }}
                  className="btnsignin"
                  variant="primary"
                  size="lg"
                  block
                  onClick={this.props.history.push("./login")}
               >Procced
            </Button>
               <Col>
                  <Form.Group>
                     <p style={{ margin: "10px 0px 0px 5px", cursor: "pointer", color: "#2a558c" }} onClick={() => this.props.history.push("/login")} >Back To Login</p>
                  </Form.Group>
               </Col>
            </Col>

         </Col>
      </Container>);
   }
}

export default CheckMail;