import React, { Component, useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router";
import "./Comment.css";

export default function Comment(props) {
  const params = useParams();

  const [comment, setCommment] = useState(null);
  const [newCommentAdded, setNewCommentAdded] = useState(false);

  useEffect(() => {
    Axios.get(`/post/?id=${params.id}`)
      .then((response) => {
        setCommment(response.data.comments);
        setNewCommentAdded(!newCommentAdded);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [newCommentAdded]);

  return (
    <div className="userComments">
      {comment && (
        <div>
          {comment.map((e) => (
            <li>{e.comment} </li>
          ))}
        </div>
      )}
    </div>
  );
}
