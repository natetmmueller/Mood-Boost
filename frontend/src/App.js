import React, { Component } from "react";

import Signup from "./user/Signup";
import Signin from "./user/Signin";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Axios from "axios";

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
    Axios.post("auth/signin").then((response) => {
      console.log(response.data.token);
    });
  };

  render() {
    return (
      <div>
        {/* You can create links to your components with link tag - see below */}
        <Router>
          <nav>
            <div>
              <Link to="post/all">Home</Link> <Link to="signup">Signup</Link>{" "}
              &nbsp
              <Link to="signin">Signin</Link> &nbsp
            </div>
          </nav>
          <div>
            <Routes>
              <Route
                path="signup"
                element={<Signup register={this.registerHandler} />}
              ></Route>
              <Route
                path="signin"
                element={<Signin login={this.loginHandler} />}
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
