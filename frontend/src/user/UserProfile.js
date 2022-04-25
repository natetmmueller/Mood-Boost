import React, { Component } from "react";
import { Container } from "react-bootstrap";
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
      // postuserid: props.posts.user.id,
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

  // loadUserPosts = () => {
  //   Axios.get("/profile")

  //     .then((response) => {
  //       console.log(response.data.posts);
  //       this.setState({
  //         posts: response.data.posts,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log("Error Fetching All Posts!");
  //       console.log(error);
  //     });
  // if (currentUser) {
  //   this.setState({posts: esponse.data.posts})
  // }
  // };

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

    // const allPosts = this.state.posts.map((post, index) => {
    //   return (
    //     <tr key={post._id}>
    //       <Post {...post} deletePost={this.deletePost}></Post>
    //     </tr>
    //   );
    // });

    return (
      <Container>
        <>
          <table>
            <tbody>
              <tr>
                <td>
                  This is what makes <b>{this.state.firstName}</b> happy!
                  {this.state.userPosts}
                </td>
              </tr>

              {userPosts}
            </tbody>
          </table>
        </>
      </Container>
    );
  }
}
