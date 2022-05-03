import React, { Component } from "react";

import { Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default class Post extends Component {
  state = {
    isAuth: false,
    user: null,
  };

  componentDidMount() {
    if (!localStorage.getItem("token")) {
    }
    let token = localStorage.getItem("token");

    if (token != null) {
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
  render() {
    let postLink = `/post/${this.props._id}`;

    return (
      <div class="card-container">
        <Card
          bg="warning"
          className="cards"
          border="warning"
          style={{ width: "20rem" }}
        >
          <Card.Img
            src={this.props.linkToIt}
            style={{ width: "80%", height: "80%" }}
            className="centered"
          ></Card.Img>
          <>
            <Card.Header
              style={{
                "font-family": "Lato, sans-serif",
                "text-align": "center",
              }}
            >
              {this.props.postTitle}
            </Card.Header>

            <div className="cardContent">
              <b>How happy does this make me? </b>
            </div>
            <div className="cardContent">
              <b>{this.props.scale}</b> out of <b>10</b>!
            </div>
            <hr></hr>
            <div className="cardContent">
              <b>Why does this make me happy?</b>
            </div>
            <div className="cardContent">{this.props.description}</div>
            <td>
              <Card.Footer
                className="cardFooter"
                style={{
                  "font-family": "Lato, sans-serif",
                  "text-align": "center",
                }}
              >
                <Link to={postLink}>
                  <Button variant="info" className="lm postButton">
                    Learn More
                  </Button>
                </Link>

                {this.state.user &&
                this.state.user.user.id == this.props.user ? (
                  <>
                    <Link to={`/post/edit/${this.props._id}`}>
                      <Button
                        variant="info"
                        className="edit postButton"
                        onClick={() => this.props.editView(this.props._id)}
                      >
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="info"
                      className="del postButton"
                      onClick={() => this.props.deletePost(this.props._id)}
                    >
                      Delete
                    </Button>
                  </>
                ) : (
                  <>
                    <Button disabled variant="info" className="edit postButton">
                      Edit
                    </Button>

                    <Button disabled variant="info" className="del postButton">
                      Delete
                    </Button>
                  </>
                )}
              </Card.Footer>
            </td>
          </>
        </Card>
      </div>
    );
  }
}
