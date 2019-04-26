import React, { Component } from "react";
import * as auth from "../apis/auth";
import * as userAction from "../apis/getUser";
import { saveObject, getObject } from "../utils";
import { Col, Row, Form, Button, Container } from "react-bootstrap"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./Loading";

toast.configure();
export default class extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  };

  componentDidMount() { }
  _onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  notify = () => toast.success("Logged In");
  login = () => {
    const { email, password } = this.state;
    this.setState({ loading: true });
    auth
      .loginApi({ email, password })
      .then(res => {
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
          <Loader></Loader>
        </div>
      );
    }

    return (
      <Container fluid>
        <Col className="loginpage" xs={12} sm={4} md={{ span: 4, offset: 4 }} centered>
          <Col>
            <h1 style={{textAlign: "center"}}>Sign In</h1>
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Control
                  className="controlinput"
                  size="lg"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this._onChange} />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">

                <Form.Control
                  className="controlinput"
                  size="lg"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this._onChange} />
              </Form.Group>

              <Button
                style={{ marginTop: "10 px" }}
                className="btnsignin"
                variant="primary"
                size="lg"
                block
                onClick={this.login}
              >Sign in
            </Button>
            </Form>
          </Col>
          <Col>
            <Button
              className="btncreateaccount text-center"
              variant="primary"
              size="lg"
              block
              onClick={() => this.props.history.push("/signup")}
            >
              {" "}
              Don't have an account? &nbsp; <b>Sign up</b>
            </Button>
          </Col>
        </Col>
      </Container >
    );
  }
}