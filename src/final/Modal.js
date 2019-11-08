import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { Creator } from "../oldies/Person/Creator";

export class Modal extends Component {
  constructor() {
    super();
    this.state = {
      view: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      view: !this.state.view
    });
  }

  render() {
    return (
      <div>
        <MDBContainer>
          {/* BUTTON */}
          <MDBBtn color="primary" onClick={this.toggle}>
            Click
          </MDBBtn>
          {/* MODAL */}
          <MDBModal
            isOpen={this.state.view}
            toggle={this.toggle}
            backdrop={false}
            size="fluid"
          >
            <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
            <MDBModalBody>
              <Creator modal={false}/>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>
                Close
              </MDBBtn>
              <MDBBtn color="primary">Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}
