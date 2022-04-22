import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        _id: props.id,

        firstName: props.firstName,

        lastName: props.lastName,

        emailAddress: props.emailAddress,
      },
    };
  }

  render() {
    return (
      <Container>
        <>
          <td>{this.props.id}</td>
          <td>{this.props.firstName}</td>
          <td>{this.props.lastName}</td>
          <td>{this.props.emailAddress}</td>
        </>
        <div>
          <div style="display:flex;justify-content:space-around">
            <div>
              <img src="https://images.unsplash.com/photo-1495791185843-c73f2269f669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFuY2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div>
              <h4>user name</h4>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
