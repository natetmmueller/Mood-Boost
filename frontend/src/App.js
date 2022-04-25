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
// import { Post } from "../../../backend/models/Post";
import { Navbar, Container, Nav } from "react-bootstrap";

import jwt_decode from "jwt-decode";
import PostDetail from "./post/PostDetail";

export default class App extends Component {
  state = {
    isAuth: false,
    user: null,
    message: null,
  };

  componentDidMount() {
    let token = localStorage.getItem("token");

    if (token != null) {
      let user = jwt_decode(token);
      let post = jwt_decode(token);
      if (user) {
        this.setState({
          isAuth: true,
          user: user,
          post: post,
        });
      } else {
        localStorage.removeItem("token");
        this.setState({
          isAuth: false,
        });
      }
    }
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
      console.log(response.data, "response data");
      let token = response.data.token;
      console.log(token);
      localStorage.setItem("token", token);
      let user = jwt_decode(token);

      this.setState({
        isAuth: true,
        user: user,
      });
      // console.log(response.data.token);
    });
    console.log(this.state);
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

  render() {
    console.log(this.state.user);
    console.log(this.state.isAuth);
    const linkStyle = {
      margin: "1rem",
      textDecoration: "none",
      color: "white",
    };
    console.log(this.state, "Hi!");
    return (
      <div>
        {/* You can create links to your components with link tag - see below */}
        <Router>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Nav className="me-auto">
                {this.state.isAuth ? 
                  <>
                    <Link to="/post/index" style={linkStyle}>
                      Home
                    </Link>
                    <Link to="/profile" style={linkStyle}>
                      My Profile
                    </Link>
                    <Link to="/post/add" style={linkStyle}>
                      Add Post
                    </Link>

                    <Link
                      to="/logout"
                      style={linkStyle}
                      onClick={this.logoutHandler}
                    >
                      Logout
                    </Link>

                  </>
                 : 
                  <>
                    <Link to="/post/index" style={linkStyle}>
                      Home
                    </Link>
                    <Link to="/signup" style={linkStyle}>
                      Sign Up
                    </Link>
                    <Link to="/signin" style={linkStyle}>
                      Sign In
                    </Link>
                    <Link to="/signup" style={linkStyle}>
                      Sign Up
                    </Link>
                    <Link to="/signin" style={linkStyle}>
                      Sign In
                    </Link>
                  </>
                }
              </Nav>
            </Container>
          </Navbar>
          <div>
            <Routes>
              {this.state.isAuth ? 
                <>
          
                  <Route path="/post/index" element={<PostIndex />}></Route>
                  <Route path="/post/add" element={<PostCreate />}></Route>

                  
                  <Route path="/post/:id" element={<PostDetail />}></Route>
                  

                  <Route
                    path="/profile"
                    element={
                      this.state.isAuth ? (
                        <UserProfile
                          user={this.state.user.user}
                          lastName={this.state.user.lastName}
                          emailAddress={this.state.user.emailAddress}
                        />
                      ) : null
                    }
                  ></Route>
                  
                </>
               : 
                <>

                  <Route
                    path="/signup"
                    element={<Signup signupAccount={this.registerHandler} />}
                  ></Route>
                  <Route
                    path="/signin"
                    element={<Signin login={this.loginHandler} />}
                  ></Route>
                  <Route path="/post/add" element={<PostCreate />}></Route>
                  <Route path="/post/index" element={<PostIndex />}></Route>
                  <Route path="/post/:id" element={<PostDetail />}></Route>


                  {/* <Navigate to="/post/index" replace={true}/> */}
                </>
              }
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
