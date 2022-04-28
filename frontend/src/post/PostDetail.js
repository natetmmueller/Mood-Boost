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
        {" "}
        {post && (
          <div>
            <h1 className="oneCommentTitle">
              <b>{post.postTitle}</b> makes me happy!
            </h1>
            <h1 className="commentTitle">
              It makes me <b>{post.scale}</b>/10 happy!
            </h1>
            <h1 className="commentTitle"> why does it make me happy?</h1>
            <h1 className="commentTitle">{post.description}</h1>
            <h1 className="commentTitle">
              Click here to see it: <b>{post.linkToIt}</b>
            </h1>
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
