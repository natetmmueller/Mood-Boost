import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Post from "../post/Post";
import Axios from "axios";
import jwt_decode from "jwt-decode";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user._id,
      firstName: props.user.name,
      posts: [],
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("token");

    if (token != null) {
      this.loadPostIndex();
      let user = jwt_decode(token);

      if (user) {
        this.setState({
          isAuth: true,
          user: user,
        });
      } else {
        localStorage.removeItem("token");
        this.setState({
          isAuth: false,
        });
      }
    }
  }

  loadPostIndex = () => {
    Axios.get("/post/index")

      .then((response) => {
        console.log(response.data.posts);
        this.setState({
          posts: response.data.posts,
        });
      })
      .catch((error) => {
        console.log("Error Fetching All Posts!");
        console.log(error);
      });
  };

  render() {
    console.log(this.state);
    console.log(this.state.posts);
    console.log(this.state.user);
    const userPosts = this.state.posts.map((post, index) => {
      if (this.state.user.user.id == post.user) {
        return (
          <tr key={index}>
            <Post {...post}></Post>
          </tr>
        );
      }
    });

    return (
      <Container>
        <div class="profileTitle">
          This is what makes <b>{this.state.firstName}</b> happy!
        </div>
        <Row xs={1} md={3} className="g-4">
          {/* {Array.from({ length: 4 })}.map((_, idx) => ( */}
          <Col>
            <Card>
              {this.state.userPosts}
              {userPosts}
            </Card>
          </Col>
          {/* ))} */}
        </Row>
      </Container>
    );
  }
}

{
  /* <div class="row">
          <table>
            <tbody>
              <tr>
                <td class="profileTitle">
                  This is what makes <b>{this.state.firstName}</b> happy!
                  {this.state.userPosts}
                </td>
              </tr>

              {userPosts}
            </tbody>
          </table>
        </div> */
}
