import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from "react-router";
import "./PostCreate.css";

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
    Axios.post("/post/add", post, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })

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
    props.loadPostIndex();
    navigate("/post/index");
  };

  return (
    <div class="createPostDiv">
      <h1 class="createFormTitle">Create Post</h1>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          margin: "0 auto",
        }}
      >
        <form onSubmit={handleSubmit} class="createForm">
          <Row>
            <Col>
              <div>
                <div>
                  <label class="createFormLabel">
                    What makes you happy? <em> Title of post goes here...</em>
                  </label>
                </div>
                <div>
                  <input
                    name="postTitle"
                    type="text"
                    onChange={handleChange}
                    class="createFormInput"
                  ></input>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <div>
              <div>
                <label class="createFormLabel">
                  How happy does this make you, from 1 - 10?
                  <em> Choose a number on the scale...</em>
                </label>
              </div>
              <div>
                <input
                  name="scale"
                  type="number"
                  min={1}
                  max={10}
                  onChange={handleChange}
                  class="createFormInput"
                ></input>
              </div>
            </div>
          </Row>

          <Row>
            <div>
              <div>
                <label class="createFormLabel">
                  Why does this make you happy?{" "}
                  <em> Write your story here...</em>
                </label>
              </div>
              <div>
                <textarea
                  name="description"
                  type="text"
                  onChange={handleChange}
                  class="createFormInput"
                ></textarea>
              </div>
            </div>
          </Row>

          <Row>
            <div>
              <div>
                <label class="createFormLabel">
                  Link to my Mood Booster! <em>Click here...</em>
                </label>
              </div>
              <div>
                <input
                  name="linkToIt"
                  type="text"
                  onChange={handleChange}
                  class="createFormInput"
                ></input>
              </div>
            </div>
          </Row>

          <Row>
            <div>
              <input type="submit" value="Add Post" class="addPostBtn"></input>
            </div>
          </Row>
        </form>
      </Container>
    </div>
  );
}
