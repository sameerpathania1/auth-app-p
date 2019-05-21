import React, { Component } from 'react';
import { getObject } from '../utils';
import { Button } from "react-bootstrap"

class AboutSettings extends Component {
   state = {
      user: {
         email: '',
         password: '',
         confirmPassword: '',
         firstName: '',
         lastName: '',
         phone: ''
      },
      address: {
         address: '',
         city: '',
         state: '',
         zipCode: '',
         country: ''
      },
      btnshow: false
   }

   showbtn = () => {
      this.setState({
         btnshow: !this.state.btnshow
      })
   }

   render() {

      const styles = {
         fontSize: 40
      }

      let btnedit = <i style={styles} class="far fa-edit"></i>
      if (this.state.btnshow) {
         btnedit = <i style={styles} class="fas fa-times"></i>
      }
      const { btnshow } = this.state
      return (

         <div className="aboutuser">
            <div style={{ float: "right", cursor: "pointer", color: "green" }} onClick={this.showbtn}>{btnedit}</div>

            <p>FirstName: &nbsp; {btnshow ? <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> : <span>{getObject("user").firstName}</span>}</p>

            <p>LastName: &nbsp; {btnshow ? <input type="text" placeholder={getObject("user").lastName} /> : <span>{getObject("user").lastName}</span>}</p>

            <p>Email: &nbsp; {btnshow ? <input type="text" placeholder={getObject("user").email} /> : <span>{getObject("user").email}</span>} </p>

            <p>Phone Number: &nbsp; {btnshow ? <input type="text" placeholder={getObject("user").phone} /> : <span>{getObject("user").phone}</span>} </p>

            <p>Address: &nbsp; <span>{getObject("user").address.address}&nbsp;{getObject("user").address.city},&nbsp;{getObject("user").address.state},&nbsp;{getObject("user").address.country}</span></p>

            <p>ZipCode: &nbsp; {btnshow ? <input type="text" placeholder={getObject("user").address.zipCode} /> : <span>{getObject("user").address.zipCode}</span>} </p>

            {btnshow ? <Button centered variant="success">Save Changes</Button> : null}
         </div>
      );
   }
}

export default AboutSettings;