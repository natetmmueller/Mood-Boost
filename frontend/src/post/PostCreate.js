import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

export default class PostCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPost: {},
    };
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
    this.props.addPost(this.state.newPost);
  };

  render() {
    console.log(this.state.newPost);
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
                      name="name"
                      type="text"
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
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
            </Row>

            <Row>
              <div>
                <input type="submit" value="Add Post"></input>
              </div>
            </Row>
          </form>
        </Container>
      </div>
    );
  }
}
