import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Signin(props) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    let temp = { ...user };
    temp[e.target.name] = e.target.value;
    setUser(temp);
  };

  const loginHandler = () => {
    props.login(user);
    navigate("/");
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Container>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="emailAddress"
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>
        <br />

        <Button varient="primary" onClick={loginHandler}>
          Login
        </Button>
      </Container>
    </div>
  );
}
