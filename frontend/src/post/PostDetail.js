import React, { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Axios from "axios";
import { useParams } from "react-router";
import PostComments from "./PostComments";
import Comment from "./Comment";

export default function PostDetail(props) {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    Axios.get(`/post/?id=${params.id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <>
        {post && (
          <div className="postDetailsForm">
            <h1 className="oneCommentTitle">
              <b>{post.postTitle}</b> makes me happy!
            </h1>
            <h1 className="commentTitle">
              Because of <b>{post.postTitle}</b> I am <b>{post.scale}</b>/10
              happy!
            </h1>
            <h1 className="commentTitle">
              Why does <b>{post.postTitle}</b> make me happy?
            </h1>
            <h1 className="commentTitle">
              <em>Because...{post.description}</em>
            </h1>
            <img
              className="centered"
              src={post.linkToIt}
              style={{ width: "25%" }}
            />
            <h1 className="comments">Comments:</h1>
            <br></br>
            <Comment />
            <br />
            <PostComments />
          </div>
        )}
      </>
    </Container>
  );
}
