import React, { Component } from "react";
import Axios from "axios";
import Post from "./Post";

export default class PostIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.loadPostIndex();
  }

  loadPostIndex = () => {
    Axios.get("/post/index")

      .then((response) => {
        console.log(response.data.posts);
        this.setState({
          posts: response.data.posts,
        });
      })
      .catch((error) => {
        console.log("Error Fetching All Posts!");
        console.log(error);
      });
  };

  deletePost = (id) => {
    Axios.delete(`/post/delete?id=${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log("Deleted Post!!!");
        this.loadPostIndex();
      })
      .catch((error) => {
        console.log("Error Deleting Post");
        console.log(error);
      });
  };

  render() {
    console.log(this.state);
    console.log(this.props);
    const allPosts = this.state.posts.map((post, index) => {
      return (
        <tr key={post._id}>
          <Post
            {...post}
            loggedInUser={this.props.user}
            deletePost={this.deletePost}
          ></Post>
        </tr>
      );
    });

    return (
      <div>
        <h1>All the Things that Make us Happy!</h1>
        <div>
          <table>
            <tbody>{allPosts}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
