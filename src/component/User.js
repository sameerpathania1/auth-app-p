import React, { Component } from "react";
import * as auth from "../apis/auth";
import * as userAction from "../apis/getUser";
import { saveObject, isLoggedIn, getObject } from "../utils";

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

  login = () => {
    const { email, password } = this.state;
    this.setState({ loading: true });
    auth
      .loginApi({ email, password })
      .then(res => {
        saveObject("user", res.data);
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error, "the; error response");
      })
      .finally(() => {
        this.setState({ loading: false });
      });
    console.log(email, password);
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
  };

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
      <div>
        <div>
          <span style={{ width: "6%", display: "inline-block" }}>Email:</span>
          <input
            type="text"
            style={{ margin: "20px" }}
            name="email"
            onChange={this._onChange}
          />
        </div>
        <div>
          <span style={{ width: "6% ", display: "inline-block" }}>
            {" "}
            password:{" "}
          </span>
          <input
            type="password"
            style={{ margin: "20px" }}
            name="password"
            onChange={this._onChange}
          />
        </div>
        <div>
          <button
            style={{
              padding: "10px 25px",
              margin: "20px",
              border: "none",
              boxShadow: "none",
              backgroundColor: "#bbb"
            }}
            onClick={this.login}
          >
            Login{" "}
          </button>
        </div>
        <div style={{ marginTop: "60px" }}>
          <button
            style={{
              padding: "10px 25px",
              margin: "20px",
              border: "none",
              boxShadow: "none",
              backgroundColor: "#bbb"
            }}
            onClick={this.getAllUsers}
          >
            Get All Users
          </button>
        </div>
      </div>
    );
  }
}
