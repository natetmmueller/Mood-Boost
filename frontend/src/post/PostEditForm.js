import React, { Component } from 'react'
import { Row, Col, Container } from "react-bootstrap";
import Axios from "axios";

export default class PostEditForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         newPost: this.props.post
      }
    }

    handleChange = (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;
    
        const post = { ...this.state.newPost };
        post[attributeToChange] = newValue;
    
        this.setState({
          newPost: post,
        });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        this.editPost(this.state.newPost);
      };
    
    
      editPost = (post) => {
        Axios.put("all", post, {
          // headers: {
          //   Authorization: "Bearer " + localStorage.getItem("token"),
          // },
        })
          .then((response) => {
            console.log("Post Added successfully!");
            this.loadPostIndex();
          })
          .catch((error) => {
            console.log("Error Adding Post");
            console.log(error);
          });
      };


  render() {
    return (
        <div>
        <Container>
          <h1>Create Post</h1>

          <form onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <div>
                  <div>
                    <label>
                      What makes you happy? <em> Title of post goes here...</em>
                    </label>
                  </div>
                  <div>
                    <input
                      name="postTitle"
                      type="text"
                      value={this.state.newAuthor.postTitle}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <div>
                <div>
                  <label>
                    How happy does this make you?
                    <em> Choose a number on the scale...</em>
                  </label>
                </div>
                <div>
                  <input
                    name="scale"
                    type="number"
                    value={this.state.newAuthor.scale}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
            </Row>

            <Row>
              <div>
                <div>
                  <label>
                    Why does this make you happy?{" "}
                    <em> Write your story here...</em>
                  </label>
                </div>
                <div>
                  <textarea
                    name="description"
                    type="text"
                    value={this.state.newAuthor.description}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
              </div>
            </Row>

            <Row>
              <div>
                <div>
                  <label>
                    Link to my Mood Booster! <em>Click here...</em>
                  </label>
                </div>
                <div>
                  <input
                    name="linkToIt"
                    type="text"
                    value={this.state.newAuthor.linkToIt}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
            </Row>

            <Row>
              <div>
                <input type="submit" value="Edit Post"></input>
              </div>
            </Row>
          </form>
        </Container>
      </div>
    )
  }
}
