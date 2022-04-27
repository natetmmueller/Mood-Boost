import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from "react-bootstrap";
import Axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router";

export default function PostEditForm(props) {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      newPost: props.post
    //   }
    // }
    let params = useParams()
    console.log(params)


    const [editSamePost, setEditSamePost] = useState('')
    const navigate = useNavigate();
    
    useEffect(() => {
      // Update the document title using the browser API
      // document.title = `You clicked ${count} times`;
      Axios.get((`/post/edit/${params.id}`), {
        // headers: {
        //   "Authorization": "Bearer " + localStorage.getItem("token")
        // }
      })
      .then(response => {
        console.log("Loaded Post Information")
        
        let post = response.data.post
        setEditSamePost(post)
      })
      .catch(error => {
        console.log("error loading post information")
        console.log(error)
      })
    },[]);


    // const [newPost, setNewPost] = useState(null);
    
    const handleChange = (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;
    
        const post = { ...editSamePost };
        post[attributeToChange] = newValue;
    
      
        setEditSamePost(post)
       
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        editPost(editSamePost);
        navigate("/post/index");
      };
    
    
      const editPost = (post) => {
        Axios.put("/post/update", post, {
          // headers: {
          //   Authorization: "Bearer " + localStorage.getItem("token"),
          // },
        })
          .then((response) => {
            console.log("Post Added successfully!");
            props.handleEdit(!props.postEdited);
          })
          .catch((error) => {
            console.log("Error Adding Post");
            console.log(error);
          });
      };


  // render() {
    
    return (
        <div>
        <Container>
          <h1>Update Post</h1>

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
                      name="postTitle"
                      type="text"
                      value={editSamePost.postTitle}
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
                    value={editSamePost.scale}
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
                    value={editSamePost.description}
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
                    value={editSamePost.linkToIt}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </Row>

            <Row>
              <div>
                <input type="submit" value="Edit Post"></input>
              </div>
            </Row>
          </form>
        
        </Container>
      </div>
    )
  }
// }
