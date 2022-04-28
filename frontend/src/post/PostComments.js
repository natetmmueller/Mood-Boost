import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./Comment.css";

export default function PostComments() {
  let params = useParams();

  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const post = { ...comment };
    post[attributeToChange] = newValue;

    setComment(post);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createComment(comment);
    let id = params.id;
    navigate(`/post/${id}`);
  };

  const createComment = (newComment) => {
    let id = params.id;
    Axios.post(`/post/${id}/comments`, newComment)
      .then((response) => {
        JSON.stringify(response.data);
      })
      .catch((error) => {
        console.log("Error Adding comment");
        console.log(error);
      });
  };

  return (
    <div className="commentDiv">
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <form>
          <Row>
            <Col>
              <div>
                <div>
                  <label>
                    <h2 className="addCommentTitle">Add comment</h2>
                  </label>
                </div>
                <div>
                  <input
                    name="comment"
                    type="text"
                    onChange={handleChange}
                  ></input>
                </div>
                <br></br>
                <input
                  type="submit"
                  value="Add Comment"
                  onClick={handleSubmit}
                ></input>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
}
