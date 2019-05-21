import React, { Component } from 'react';
import { Container, Col, Modal, Row, Button } from "react-bootstrap"

class DeleteProduct extends Component {
   state = {}
   render() {
      return (<Modal.Dialog>
         <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
         </Modal.Header>

         <Modal.Body>
            <p>Modal body text goes here.</p>
         </Modal.Body>

         <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
         </Modal.Footer>
      </Modal.Dialog>);
   }
}

export default DeleteProduct;