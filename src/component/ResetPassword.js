import React, { Component } from 'react';
import { Container, Col, Button, Form } from "react-bootstrap";
import { toast } from 'react-toastify';
import { getResetAPI } from '../apis/resetPassword';

toast.configure()

class ResetPassword extends Component {
   state = {
      pass: {
         password: "",
         confirmpassword: ""
      }
   }


   _onChange = (key) => ({ target: { value, name } }) => {
      let data = { ...this.state[key] };
      data[name] = value;
      this.setState({ [key]: data })
   }

   isValid() {
      const { password, confirmpassword } = this.state.pass
      if (password === confirmpassword) {
         return true;
      }
      return false;
   }

   notify = () => {
      toast("your password should match")
   }

   resetpassbtn = (e) => {
      e.preventDefault()
      const { pass } = this.state
      if (this.isValid()) {
         getResetAPI(pass).then(res => {
            console.log("password changed")
            toast.success("Password Changed Redirecting to Login Page")
            setTimeout(() => {
               this.props.history.push("/login")
            }, 5000)
         }).catch(err => {
            toast.warn(err.response.data.message || "Something went wrong")
         })
      }
      else {
         this.notify()
      }
   }

   render() {

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
                           value={this.state.pass.password}
                           onChange={this._onChange("pass")} />
                     </Form.Group>
                     <Form.Group controlId="formGroupEmail">
                        <Form.Control
                           className="controlinput"
                           size="lg"
                           type="password"
                           placeholder="Confirm Password"
                           name="confirmpassword"
                           value={this.state.pass.confirmpassword}
                           onChange={this._onChange("pass")} />
                     </Form.Group>

                     <Button
                        type="submit"
                        style={{ margin: "30px 0px 140px 0px" }}
                        className="btnsignin"
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.resetpassbtn}
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