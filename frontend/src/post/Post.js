import { Axios } from "axios";
import React, { Component } from "react";

import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Navigate, Route, Router, useNavigate } from "react-router-dom";
// import PostDetail from "./PostDetail";

export default class Post extends Component {
  render() {
    return (
      <div class="row">
        <Card className="cards" border="warning" style={{ width: "20rem" }}>
          <>
            <div class="text-center">
              <Card.Header>{this.props.postTitle}</Card.Header>
            </div>

            <td>
              <b>Happy Score: </b>
              {this.props.scale}
            </td>
            <td>
              <b>My Story: </b>
              {this.props.description}
            </td>
            <td>
              <b>Link: </b>
              {this.props.linkToIt}
            </td>
            <td>
              <Card.Footer className="cardFooter">
                {/* i know i need to send it to a specific ID im just not sure how to do that yet */}
                <Link to="/post/:id">
                  <Button variant="info" className="lm postButton">
                    Learn More
                  </Button>
                </Link>

                <Link to="/post/edit">
                  <Button variant="info" className="edit postButton">
                    Edit
                  </Button>
                </Link>

                <Button
                  variant="info"
                  className="del postButton"
                  onClick={() => {
                    this.props.deletePost(this.props._id);
                  }}
                >
                  Delete
                </Button>
                <td>
                  <b> Posted by: </b> {this.props.user.firstName}
                </td>
              </Card.Footer>
            </td>
          </>
        </Card>
      </div>
    );
  }
}
