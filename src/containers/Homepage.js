import React, { Component } from "react";
import { removeObject } from "../utils";

export default class extends Component {
  logout = () => {
    removeObject("user");
    this.props.history.push("/login");
  };

  render() {
    return <div onClick={this.logout}>Logout</div>;
  }
}
