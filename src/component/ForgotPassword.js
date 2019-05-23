import React, { Component } from 'react';
import { Container, Col, Row, Form, Button } from "react-bootstrap"
import { forgotPasswordApi } from '../apis/auth';

class ForgotPassword extends Component {
   state = {
      user: {
         email: ""
      }
   }
   _onChange = ({ target: { name = '', value = '' } }) => {
      this.setState({
         user: {
            ...this.state.user,
            [name]: value
         }
      });
   };

   forgotpassword = (e) => {
      e.preventDefault()
      const { user } = this.state
      console.log(user, "email to send")
      forgotPasswordApi(user).then(() => {
         console.log("sended")
         this.props.history.push("/checkmail")
      }).catch(err => {
         console.log(err, "error from forgotpassword")
      })

   }

   render() {
      const { email } = this.state.user
      return (
         <Container fluid>
            <Col className="loginpage" xs={12} sm={4} md={{ span: 4, offset: 4 }}>
               <Col>
                  <h2 style={{ textAlign: "center" }}>Account Recovery</h2>
                  <Form onSubmit={this.forgotpassword}>
                     <Form.Group controlId="formGroupEmail" style={{ marginTop: 85 }}>
                        <Form.Control
                           className="controlinput"
                           size="lg"
                           type="email"
                           placeholder="Type your Email Address"
                           name="email"
                           value={email}
                           onChange={this._onChange} />
                     </Form.Group>

                     <Button
                        type="submit"
                        style={{ margin: "30px 0px 170px 0px" }}
                        className="btnsignin"
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.forgotpassword}
                     >Procced
            </Button>
                  </Form>
                  <Row>
                     <Col>
                        <Form.Group>
                           <p style={{ margin: "10px 0px 0px 5px", cursor: "pointer", color: "#2a558c" }} onClick={() => this.props.history.push("/login")} >Back to Login</p>
                        </Form.Group>
                     </Col>
                  </Row>
               </Col>

            </Col>
         </Container>
      );
   }
}

export default ForgotPassword;