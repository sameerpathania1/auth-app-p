import React, { Component } from "react";
import { removeObject, getObject, saveObject } from "../utils";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify"
import { productsApi } from "../apis/auth";

export default class extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Welcome, {getObject("user").name}</h1>
      </div >
    )
  }
}
