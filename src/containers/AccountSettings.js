import React, { Component } from 'react';
import { getObject } from '../utils';
class AboutSettings extends Component {
   state = {}
   render() {
      return (
         <div className="aboutuser">
            <p>FirstName: &nbsp; <span>{getObject("user").firstName}</span></p>
            <p>LastName: &nbsp; <span>{getObject("user").lastName}</span></p>
            <p>Email: &nbsp; <span>{getObject("user").email}</span></p>
            <p>Phone Number: &nbsp; <span>{getObject("user").phone}</span></p>
            <p>Address: &nbsp; <span>{getObject("user").address.address}&nbsp;{getObject("user").address.city},&nbsp;{getObject("user").address.state},&nbsp;{getObject("user").address.country}</span></p>
            <p>ZipCode: &nbsp; <span>{getObject("user").address.zipCode}</span></p>
         </div>);
   }
}

export default AboutSettings;