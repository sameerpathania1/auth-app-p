import React, { Component } from "react";
import * as auth from "../apis/auth";
import * as userAction from "../apis/getUser";
import { saveObject, getObject } from "../utils";
import { Col, Row, Form, Button, Container } from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
export default class extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  };

  componentDidMount() {}
  _onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
notify = () => toast("Logged In");
  login = () => {
    const { email, password } = this.state;
    // this.setState({ loading: true });
    auth.loginApi({ email, password }).then(res => {
      saveObject("user", res.data);
      this.props.history.push("/");
      this.notify()
    }).catch(error => {
      console.log(error, "the; error response");
    }).finally(() => {
      this.setState({ loading: false });
    });
  };

  getAllUsers = () => {
    console.log("getuserfun");
    // const data = JSON.parse(window.localStorage.getItem("user"));

    const user = getObject("user");

    userAction
      .getUserApi({ Authorization: `Bearer ${user.token}` })
      .then(res => {
        console.log(res, "the response of get users");
      })
      .catch(error => {
        console.log(error);
      });
  }

 
  
  
  render() {
    

    console.log(this.props, "props");
    const { loading } = this.state;

    if (loading) {
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Loading...
        </div>
      );
    }

    return (

       
      <Container  fluid>
        <Col className='onlywhite' xs={12} sm={4} md={{ span: 4, offset: 4 }}>
          <Col>
            <h2 className="signintext">Sign in</h2>
          </Col>
          <Col className="formstart">
            <Form>
              <Form.Group
                controlId="forBasicemail"
                className="formcontrol"
              >
                <Form.Control
                  className="controlinput"
                  size="lg"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this._onChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicPassword"
                className="formcontrol"
              >
                <Form.Control
                  className="controlinput"
                  size="lg"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this._onChange}
                />
              </Form.Group>
              <Form.Group>
                <Row xs="12">
                  <Col xs="7">
                    <p
                      style={{
                        marginTop: "7px",
                        cursor: "pointer",
                        color: "#6f6f6f"
                      }}
                    >
                      <a href>Forgot Password?</a>
                    </p>
                  </Col>
                  <Col xs="5">
                    <Button
                      style={{ marginTop: "10 px" }}
                      className="btnsignin"
                      variant="primary"
                      size="lg"
                      block
                      onClick={this.login}
                    >
                      Sign in
                          </Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Col>
          <Col className="text-center" block>
            <Button
              className="btncreateaccount text-center"
              block
              onClick={() => this.props.history.push("/signup")}
            >
              {" "}
              Don't have an account? &nbsp; <b>Sign up</b>
            </Button>
          </Col>
        </Col>
      </Container>
    )
  }
}
