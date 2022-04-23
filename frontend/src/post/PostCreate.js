import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from "react-router";

export default function PostCreate(props) {
  const [newPost, setNewPost] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const post = { ...newPost };
    post[attributeToChange] = newValue;

    setNewPost(post);
  };

  const addPost = (post) => {
    Axios.post("/post/add", post)
      .then((response) => {
        console.log("Post Added successfully!");
      })
      .catch((error) => {
        console.log("Error Adding Post");
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(newPost);
    navigate("/post/index");
  };

  return (
    <div>
      <Container>
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
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
                    onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
