import React, { Component } from "react";
import { removeObject, getObject } from "../utils";
import { Button } from "react-bootstrap";

export default class extends Component {
  
  logout = () => {
    removeObject("user");
    this.props.history.push("/login");
  };

  render() {
    return (
      <div
        style={{
          marginTop: "100px",
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Button style={{float: "right", border: "none", marginRight: "40px"}} onClick={this.logout}>
        Sign Out</Button>
        <h1 className="welcomename">Welcome, {getObject("user").name}</h1>
      </div>
    )
  }
}
