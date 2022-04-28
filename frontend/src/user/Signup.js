import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Signup(props) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    let temp = { ...user };
    temp[e.target.name] = e.target.value;
    setUser(temp);
  };

  const signupHandler = () => {
    props.signupAccount(user);
    navigate("/signin");
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Container>
        <Form.Group>
          <Form.Label>
            <span className="formText">First Name</span>
          </Form.Label>
          <Form.Control
            name="firstName"
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <span className="formText">Last Name</span>
          </Form.Label>
          <Form.Control name="lastName" onChange={changeHandler}></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <span className="formText">Email Address</span>
          </Form.Label>
          <Form.Control
            name="emailAddress"
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <span className="formText">Password</span>
          </Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>
        <br />
        <Button className="formText" varient="primary" onClick={signupHandler}>
          Register
        </Button>
      </Container>
    </div>
  );
}
