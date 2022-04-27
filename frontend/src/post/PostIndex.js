import React, { useState, useEffect } from "react";
import Axios from "axios";
import Post from "./Post";
import { useNavigate } from "react-router";

// import { Post } from "../../../backend/models/Post";

export default function PostIndex(props){
  const [posts, setPosts] = useState(props.posts)
  const navigate = useNavigate();



  useEffect(() => {
    if(!props.user){
      navigate("/");
    }
    setPosts(props.posts)
    props.loadPostIndex();
  }, [props.posts?.length, props.postEdited, props])
// if we put---> , props <--- in line 20 at the end its goes into a infinite loop but it does show the edit and add post automatically updating
  const deletePost = (id) => {
    Axios.delete(`/post/delete?id=${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log("Deleted Post!!!");
        props?.loadPostIndex();
      })
      .catch((error) => {
        console.log("Error Deleting Post");
        console.log(error);
      });
  };

  const allPosts = posts?.map((post, index) => {
    return (
      <tr key={post._id}>
        <Post {...post} deletePost={deletePost}></Post>
      </tr>
    );
  });

    return (
      <>    
        <div>
          <h1>All the Things that Make us Happy!</h1>
          <div>
            <table>
              {allPosts}
            </table>
          </div>
        </div>
      </>
    );
}