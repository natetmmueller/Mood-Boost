import { Axios } from "axios";
import React, { Component } from "react";

import { Card, Button } from "react-bootstrap";
import PostDetail from "./PostDetail";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// import { Navigate, Route, Router, useNavigate } from "react-router-dom";
// import PostDetail from "./PostDetail";

export default class Post extends Component {

  render() {
    let postLink = `/post/${this.props._id}`
    return (

        <Card className="cards" border="warning" style={{ width: '18rem' }}>
            <>
                <Card.Header>{this.props.postTitle}</Card.Header>
            
                <td>{this.props.scale}</td>
                <td>{this.props.description}</td>
                <td>{this.props.linkToIt}</td>
                <td>
                    <Card.Footer className="cardFooter">
                        {/* i know i need to send it to a specific ID im just not sure how to do that yet */}
                        <Link to={postLink}>
                            <Button variant="info" className="lm postButton">
                                Learn More
                            </Button>
                        </Link>

                        
                        <Link to="/post/edit">
                            <Button variant="info" className="edit postButton">
                                Edit
                            </Button>
                        </Link>
                        {/* <Routes>
                            <Route path="/post/:id" element={<PostDetail />}></Route>
                        </Routes> */}

                <Link to={`/post/edit/${this.props._id}`}>
                            <Button variant="info" className="edit postButton"
                            onClick={() => {this.props.editView(this.props._id)}}
                            >
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
             

                  {/* <b> Posted by: </b> {this.props.user.firstName} */}
                
              </Card.Footer>


            </td>
          </>
        </Card>
      </div>
    );
  }
}

