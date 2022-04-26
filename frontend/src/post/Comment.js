import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return (
    <>
    <td>{this.props.post.comments}</td>
    </>
    )
  }
}
