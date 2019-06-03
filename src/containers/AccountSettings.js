import React, { Component } from "react";
import { getObject } from "../utils";
import { Button, Row, Col } from "react-bootstrap";
import picedit from "../assets/editbuttonicon.png";
import picclose from "../assets/closebtnicon.png";
import { UpdateUser } from "../apis/accountsetting";
import { toast } from "react-toastify";

class AboutSettings extends Component {
  state = {
    user: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: {}
    },
    btnshow: false
  };

  componentDidMount() {
    const user = getObject("user");
    const { email, name, ...restUser } = user;
    this.setState({ user: restUser });
  }

  _onchange = key => ({ target: { value = "", name = "" } }) => {
    let data = { ...this.state[key] };
    data[name] = value;
    this.setState({ [key]: data });
  };

  showbtn = () => {
    this.setState({
      btnshow: !this.state.btnshow
    });
  };

  submitChanges = () => {
    const { user } = this.state;
    const { id, ...restUser } = user
    UpdateUser(id, restUser)
      .then(res => {
        console.log(id, res, "res")
        toast.success("Changes Saved");
        this.showbtn();
      })
      .catch(err => {
        toast.warn(err.response.data.message || "Something went Wrong");
      });
  };

  render() {
    const styles = {
      width: "100%",
      height: "100%",
      cursor: "pointer"
    };

    console.log(this.state.user, 'user kupdateasldkfjksadlfjksd')

    let btnedit = (
      <img style={styles} src={picedit} alt="" onClick={this.showbtn} />
    );
    if (this.state.btnshow) {
      btnedit = (
        <img style={styles} src={picclose} alt="" onClick={this.showbtn} />
      );
    }

    const { btnshow } = this.state;
    return (
      <div className="aboutuser">
        <Row xs={12} sm={12} md={12}>
          <Col xs={12} sm={10} md={10}>
            <p>
              FirstName: &nbsp;{" "}
              {btnshow ? (
                <input
                  type="text"
                  name="firstName"
                  onChange={this._onchange("user")}
                  value={this.state.user.firstName}
                  placeholder="Enter FirstName"
                />
              ) : (
                  <span>{getObject("user").firstName}</span>
                )}
            </p>

            <p>
              LastName: &nbsp;{" "}
              {btnshow ? (
                <input
                  type="text"
                  name="lastName"
                  onChange={this._onchange("user")}
                  value={this.state.user.lastName}
                  placeholder="Enter LastName"
                />
              ) : (
                  <span>{getObject("user").lastName}</span>
                )}
            </p>

            <p>
              Email: &nbsp;{" "}
              {btnshow ? (
                <input
                  type="text"
                  name="email"
                  onChange={this._onchange("user")}
                  value={this.state.user.email}
                  placeholder="Enter Email"
                />
              ) : (
                  <span>{getObject("user").email}</span>
                )}{" "}
            </p>

            <p>
              Phone Number: &nbsp;{" "}
              {btnshow ? (
                <input
                  type="text"
                  name="phone"
                  onChange={this._onchange("user")}
                  value={this.state.user.phone}
                  placeholder="Enter Phone Number"
                />
              ) : (
                  <span>{getObject("user").phone}</span>
                )}{" "}
            </p>

            <p>
              Address: &nbsp;
              <span>
                {getObject("user").address.address}&nbsp;
                {getObject("user").address.city},&nbsp;
                {getObject("user").address.state},&nbsp;
                {getObject("user").address.country}
              </span>
            </p>

            {/*  <p>
              ZipCode: &nbsp;{" "}
              {btnshow ? (
                <input
                  type="text"
                  name="zipCode"
                  onChange={this._onchange("address")}
                  value={this.state.address.zipCode}
                  placeholder="Enter LastName"
                />
              ) : (
                  <span>{getObject("user").address.zipCode}</span>
                )}{" "}
            </p>
 */}
            {btnshow ? (
              <Button onClick={this.submitChanges} centered variant="success">
                Save Changes
              </Button>
            ) : null}
          </Col>
          <Col xs={12} sm={2} md={2}>
            <div style={{ float: "right", color: "green" }}>{btnedit}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AboutSettings;
