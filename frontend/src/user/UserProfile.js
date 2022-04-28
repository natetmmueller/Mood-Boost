import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Post from "../post/Post";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import "./UserProfile.css";

export default function UserProfile(props) {
  const userPosts = props.posts.map((post, index) => {
    if (props.user.user.id === post.user) {
      return (
        <tr key={index}>
          <Post
            {...post}
            deletePost={props.deletePost}
            loggedInUser={props.user}
          ></Post>
        </tr>
      );
    }
  });

  return (
    <Container>
      <div class="profileTitle">
        This is what makes <b>{props.user.user.name}</b> happy!
      </div>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card>{userPosts}</Card>
        </Col>
      </Row>
    </Container>
  );
}
