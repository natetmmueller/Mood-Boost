import { Axios } from "axios";
import React, { Component } from "react";

import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Navigate, Route, Router, useNavigate } from "react-router-dom";
// import PostDetail from "./PostDetail";

export default class Post extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //      currentPost: ""
  //   }
  // }

  // getPostDetails = (id) => {
  //     Axios.get(`/post/:id${id}`,
  //     {
  //         headers: {
  //             "Authorization": "Bearer " + localStorage.getItem("token")
  //         }
  //     })
  //     .then(response => {
  //         console.log("Loaded Author Information!!")
  //         console.log(response.data.post)
  //         let post = response.data.post
  //         this.setState({
  //             currentPost: post
  //         })
  //     })
  //     .catch(error => {
  //         console.log("Error Loading Author Information!!")
  //         console.log(error)
  //     })
  // }

  // let postDetail = useNavigate();
  // const routeChange = () => {
  //     let path = '/post/:id'
  //     navigate(path)
  // }

  render() {
    return (
      <Card className="cards" border="warning" style={{ width: "18rem" }}>
        <>
          <Card.Header>{this.props.postTitle}</Card.Header>

          <td>{this.props.scale}</td>
          <td>{this.props.description}</td>
          <td>{this.props.linkToIt}</td>
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
            </Card.Footer>
          </td>
        </>
      </Card>
    );
  }
}
