import React, { Component } from "react";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PostCreate from "./post/PostCreate";
import "./App.css";
import "./index.css";
import UserProfile from "./user/UserProfile";
import PostIndex from "./post/PostIndex";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Axios from "axios";

import { Container, Nav } from "react-bootstrap";

import jwt_decode from "jwt-decode";
import PostDetail from "./post/PostDetail";
import PostEditForm from "./post/PostEditForm";
import PostHome from "./post/PostHome";

export default class App extends Component {
  state = {
    isAuth: false,
    user: null,
    message: null,
    posts: [],
    postEdited: false,
  };

  constructor(props) {
    super(props);
    let url = new URLSearchParams(window.location.search).get("id");
    console.log(url, "url");
  }

  loadUserProfile = (id) => {
    Axios.get("profile")
      .then((response) => {
        this.setState({
          userprofile: response.user,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  registerHandler = (user) => {
    Axios.post("auth/signup", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  loginHandler = (cred) => {
    Axios.post("auth/signin", cred).then((response) => {
      let token = response.data.token;
      localStorage.setItem("token", token);
      let user = jwt_decode(token);
      this.setState({
        isAuth: true,
        user: user,
      });
    });
  };

  logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.setState({
      isAuth: false,
      user: null,
      message: "User logged out successfully!!!",
    });
  };

  handleEdit = (incoming) => {
    this.setState({ postEdited: incoming });
  };

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

  deletePost = async (id) => {
    await Axios.delete(`/post/delete?id=${id}`);

    console.log("Deleted Post!!!");
    this.loadPostIndex();
  };

  render() {
    const linkStyle = {
      margin: "1rem",
      textDecoration: "none",
      color: "white",
    };

    return (
      <div>
        <Router>
          <Container>
            <Nav className="me-auto navbar fixed-top">
              {this.state.isAuth ? (
                <>
                  <Link to="/post/index" style={linkStyle}>
                    View Posts
                  </Link>
                  <Link to="/profile" style={linkStyle}>
                    My Profile
                  </Link>
                  <Link to="/post/add" style={linkStyle}>
                    Add Post
                  </Link>

                  <Link
                    to="/signin"
                    style={linkStyle}
                    onClick={this.logoutHandler}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/signup" style={linkStyle}>
                    Sign Up
                  </Link>
                  <Link to="/signin" style={linkStyle}>
                    Sign In
                  </Link>
                </>
              )}
            </Nav>
          </Container>

          <div>
            <Routes>
              {this.state.isAuth ? (
                <>
                  <Route path="/" element={<PostHome></PostHome>} />

                  <Route
                    path="/post/index"
                    element={
                      <PostIndex
                        user={this.state.user}
                        postEdited={this.state.postEdited}
                        loadPostIndex={this.loadPostIndex}
                        posts={this.state.posts}
                        deletePost={this.deletePost}
                      />
                    }
                  ></Route>
                  <Route
                    path="/post/add"
                    element={<PostCreate loadPostIndex={this.loadPostIndex} />}
                  ></Route>

                  <Route
                    path="/post/edit/:id"
                    element={
                      <PostEditForm
                        loadPostIndex={this.loadPostIndex}
                        postEdited={this.state.postEdited}
                        handleEdit={this.handleEdit}
                      />
                    }
                  ></Route>

                  <Route
                    path="/post/:id"
                    element={<PostDetail name={"post"} />}
                  ></Route>

                  <Route
                    path="/profile"
                    element={
                      <UserProfile
                        user={this.state.user}
                        lastName={this.state.user.lastName}
                        emailAddress={this.state.user.emailAddress}
                        deletePost={this.deletePost}
                        loadPostIndex={this.loadPostIndex}
                        posts={this.state.posts}
                      />
                    }
                  ></Route>
                </>
              ) : (
                <>
                  <Route
                    path="/signup"
                    element={<Signup signupAccount={this.registerHandler} />}
                  ></Route>
                  <Route
                    path="/signin"
                    element={<Signin login={this.loginHandler} />}
                  ></Route>
                  <Route path="/" element={<PostHome></PostHome>} />
                </>
              )}
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
