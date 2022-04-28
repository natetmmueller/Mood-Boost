import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Post from "../post/Post";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import "./UserProfile.css";

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
        this.setState({
          posts: response.data.posts,
        });
      })
      .catch((error) => {
        console.log("Error Fetching All Posts!");
        console.log(error);
      });
  };

  deletePost = (id) => {
    Axios.delete(`/post/delete?id=${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        this.loadPostIndex();
      })
      .catch((error) => {
        console.log("Error Deleting Post");
        console.log(error);
      });
  };

  render() {
    
    const userPosts = this.state.posts.map((post, index) => {
      if (this.state.user.user.id === post.user) {
        return (
          <tr key={index}>
            <Post
              {...post}
              deletePost={this.deletePost}
              loggedInUser={this.props.user}
            ></Post>
          </tr>
        );
      }
    });

    return (
      <Container>
        <div className="profileTitle">
          This is what makes <b>{this.props.user.user.name}</b> happy!
        </div>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>{userPosts}</Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
