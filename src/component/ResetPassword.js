import React, { Component } from 'react';
import { Container, Col, Button, Form } from "react-bootstrap"
import actions from '../actions';

class ResetPassword extends Component {
   state = {
      password: "",
      confirmpassword: ""
   }

   resetPassword = () => {
      actions.resetPassword({ token: this.props.match && this.props.match.params && this.props.match.params.token || "", password: this.state.password || '' })
   }


   componentDidMount() {
      console.log(this.props.match.params.token, 'param')
   }
   render() {
      const { password, confirmpassword } = this.state
      return (
         <Container fluid>
            <Col className="loginpage" xs={12} sm={4} md={{ span: 4, offset: 4 }}>
               <Col>
                  <h2 style={{ textAlign: "center" }}>Reset Password</h2>
                  <Form onSubmit={this.login}>
                     <Form.Group controlId="formGroupEmail" style={{ marginTop: 45 }}>
                        <Form.Control
                           className="controlinput"
                           size="lg"
                           type="email"
                           placeholder="Enter Password"
                           name="email"
                           value={password}
                           onChange={this._onChange} />
                     </Form.Group>
                     <Form.Group controlId="formGroupEmail">
                        <Form.Control
                           className="controlinput"
                           size="lg"
                           type="email"
                           placeholder="Confirm Password"
                           name="email"
                           value={confirmpassword}
                           onChange={this._onChange} />
                     </Form.Group>

                     <Button
                        type="submit"
                        style={{ margin: "30px 0px 140px 0px" }}
                        className="btnsignin"
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.login}
                     >Procced
            </Button>
                  </Form>
                  <Col>
                     <Form.Group>
                        <p style={{ margin: "10px 0px 0px 5px", cursor: "pointer", color: "#2a558c" }} onClick={() => this.props.history.push("/forgotpassword")} >back to forgot</p>
                     </Form.Group>
                  </Col>
               </Col>

            </Col>
         </Container>
      );
   }
}

export default ResetPassword;