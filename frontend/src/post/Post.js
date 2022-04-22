import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <>
        <td>{this.props.postTitle}</td>
        <td>{this.props.scale}</td>
        <td>{this.props.description}</td>
        <td>{this.props.linkToIt}</td>
        <td>
          <button
            onClick={() => {
              this.props.editView(this.props._id);
            }}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              this.props.deletePost(this.props._id);
            }}
          >
            Delete
          </button>
        </td>
      </>
    );
  }
}
