import React, { Component } from "react";
import { Col, Form, Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../component/loaders/Loading";
import actions from "../actions";
import { connect } from "react-redux";
toast.configure();
class Login extends Component {
  state = {
    user: {
      email: "",
      password: ""
    },
    loading: false,
    no: 0
  };

  _onChange = ({ target: { name = "", value = "" } }) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };

  notify = () => toast.success("Logged In");

  login = e => {
    e.preventDefault();
    const { user } = this.state;
    this.setState({ loading: true });
    actions
      .onLoginPress(user)
      .then(res => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  /*  getAllUsers = () => {
     console.log("getuserfun");
     // const data = JSON.parse(window.localStorage.getItem("user"));
 
     const user = getObject("user");
 
     userAction
       .getUserApi({ Authorization: `Bearer ${user.token}` })
       .then(res => {
         console.log(res, "the response of get users");
       })
       .catch(error => {
         console.log(error, "error found");
       });
   } */

  render() {
    console.log(this.state.no, "no");
    const { loading, user } = this.state;

    return (
      <Container fluid>
        {loading && (
          <div className="custom-loader">
            <Loader />
          </div>
        )}
        <Col className="loginpage" xs={12} sm={4} md={{ span: 4, offset: 4 }}>
          <Col>
            <h1 style={{ textAlign: "center" }}>Sign In</h1>
            <Form onSubmit={this.login}>
              <Form.Group controlId="formGroupEmail">
                <Form.Control
                  className="controlinput"
                  size="lg"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  onChange={this._onChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Control
                  className="controlinput"
                  size="lg"
                  name="password"
                  value={user.password}
                  type="password"
                  placeholder="Password"
                  onChange={this._onChange}
                />
              </Form.Group>
              <Form.Group>
                <p
                  style={{ margin: "10px 0px 0px 5px", cursor: "pointer" }}
                  onClick={() => this.props.history.push("/forgotpassword")}
                >
                  Forgot Password?
                </p>
              </Form.Group>
              <Button
                type="submit"
                style={{ marginTop: "10 px" }}
                className="btnsignin"
                variant="primary"
                size="lg"
                onClick={this.login}
                block
              >
                Sign in
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
      </Container>
    );
  }
}
export default connect(state => state)(Login);
