import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Post from "../post/Post";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: props.user.id,
      // postid: props.post.id,
      firstName: props.user.name,
      posts: [],
      user: props.user.id,
      post: props.post,
    };
  }

  render() {
    console.log(this.state.user);
    console.log(this.state.post);

    return (
      <Container>
        <>
          <table>
            <tbody>
              <tr>
                <td>
                  This is what makes <b>{this.state.firstName}</b> happy!
                </td>
              </tr>
              <Post />
            </tbody>
          </table>
        </>
      </Container>
    );
  }
}
