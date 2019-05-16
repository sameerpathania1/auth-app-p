import React, { Component } from 'react';
import { Container, Col, Button, Form } from "react-bootstrap"
import actions from '../actions';
import { toast } from 'react-toastify';

class ResetPassword extends Component {
   state = {
      pass: {
         password: "",
         confirmpassword: ""
      }
   }


   _onChange = (key) => ({ target: { value = {}, name = {} } }) => {
      let data = { ...this.state }
      data[name] = value;
      this.setState({
         [key]: data
      })
   }

   isValid = () => {
      const { password, confirmpassword } = this.state
      if (password === confirmpassword) {
         return true;
      }
      return false;
   }

   resetPassword = () => {
      actions.resetPassword(this.isvalid() ? { token: this.props.match && this.props.match.params && this.props.match.params.token || "", password: this.state.password || '' } : toast.warn("Both Entered password should match"))
   }


   componentDidMount() {
      console.log(this.props.match.params.token, 'param')
   }
   render() {
      const { pass } = this.state;

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
                           type="password"
                           placeholder="Enter Password"
                           name="password"
                           value={pass.password}
                           onChange={this._onChange("pass")} />
                     </Form.Group>
                     <Form.Group controlId="formGroupEmail">
                        <Form.Control
                           className="controlinput"
                           size="lg"
                           type="password"
                           placeholder="Confirm Password"
                           name="confirmpassword"
                           value={pass.confirmpassword}
                           onChange={this._onChange("pass")} />
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