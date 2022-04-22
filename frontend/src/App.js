import React, { Component } from "react";

import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PostCreate from "./post/PostCreate";
import "./index.css";

import PostIndex from "./post/PostIndex";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Axios from "axios";
// import { Post } from "../../../backend/models/Post";
import { Navbar, Container, Nav } from "react-bootstrap";

export default class App extends Component {
  state = {
    isAuth: false,
    user: null,
    message: null,
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
      console.log(response.data);
      console.log(response.data.token);
    });
  };

  render() {
    const linkStyle = {
      margin: "1rem",
      textDecoration: "none",
      color: "white",
    };
    return (
      <div>
        {/* You can create links to your components with link tag - see below */}
        <Router>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Nav className="me-auto">
                <Link to="/post/index" style={linkStyle}>
                  Home
                </Link>
                <Link to="/signup" style={linkStyle}>
                  Sign Up
                </Link>
                <Link to="/signin" style={linkStyle}>
                  Sign In
                </Link>
                <Link to="/post/add" style={linkStyle}>
                  Add Post
                </Link>
              </Nav>
            </Container>
          </Navbar>
          {/* <nav bg="primary" variant="dark">
            <div>
              <Link to="post/all">Home</Link>{" "}
              <Link to="signup">Signup</Link>{" "}
              
              <Link to="signin">Signin</Link>{" "}
            </div>
          </nav> */}
          <div>
            <Routes>
              <Route
                path="/signup"
                element={<Signup singupAccount={this.registerHandler} />}
              ></Route>
              <Route
                path="/signin"
                element={<Signin login={this.loginHandler} />}
              ></Route>
              <Route path="/post/add" element={<PostCreate addPost={this.addPost}/>}></Route>
              <Route path="/post/index" element={<PostIndex />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
