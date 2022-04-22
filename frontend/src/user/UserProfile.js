import React, { Component } from "react";
import { Container } from "react-bootstrap";

// import { User } from "../backend/models/User";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    console.log(props.user);
    this.state = {
      id: props.user.id,

      firstName: props.user.name,

      lastName: props.user.lastName,

      emailAddress: props.user.emailAddress,
    };
  }

  render() {
    return (
      <Container>
        <>
          <table>
            <tbody>
              <tr>
                <td>
                  This is what makes <b>{this.state.firstName}</b> happy!
                </td>
                <td>{this.state.lastName}</td>
                <td>{this.state.emailAddress}</td>
              </tr>
            </tbody>
          </table>
        </>
        {/* <div>
          <div style="display:flex;justify-content:space-around">
            <div>
              <img src="https://images.unsplash.com/photo-1495791185843-c73f2269f669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFuY2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div>
              <h4>user name</h4>
            </div>
          </div>
        </div> */}
      </Container>
    );
  }
}
