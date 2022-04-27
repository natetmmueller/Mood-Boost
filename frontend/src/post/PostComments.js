import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from 'react-router-dom';
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router";


export default function PostComments() {

let params = useParams()
    console.log(params)


    const [comment, setComment] = useState('')
    const navigate = useNavigate();
    
    // useEffect(() => {
    //   // Update the document title using the browser API
    //   // document.title = `You clicked ${count} times`;
    //   Axios.post((`/post/${params.id}/comments`), {
    //     // headers: {
    //     //   "Authorization": "Bearer " + localStorage.getItem("token")
    //     // }
    //   })
    //   .then(response => {
    //     console.log("Loaded Comment Information")
    //     console.log(response.data.post)
    //     let post = response.data.post
    //     addComment(post)
    //   })
    //   .catch(error => {
    //     console.log("error loading post information")
    //     console.log(error)
    //   })
    // },[]);

    const handleChange = (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;
    
        const post = { ...comment };
        post[attributeToChange] = newValue;
    
      
        setComment(post)
       
      };
    
      const handleSubmit = (e) => {
          console.log("test")
        e.preventDefault();
        createComment(comment);
        let id = params.id
        navigate(`/post/${id}`);
      };

    //   useEffect(() => {

    //   },[comment])

      const createComment = (newComment) => {
          console.log(params.id)
          let id = params.id
        Axios.post(`/post/${id}/comments`, newComment)
          .then((response) => {
              JSON.stringify(response.data)
            console.log("Comment Added successfully!");
          })
          .catch((error) => {
            console.log("Error Adding comment");
            console.log(error);
          });
      }

    //   console.log(comment)

  return (
    <div>
         <Container>
        <form>
          <Row>
            <Col>
              <div>
                <div>
                  <label>
                    <h4>Add comment</h4>
                  </label>
                </div>
                <div>
                  <input
                    name="comment"
                    type="text"
                    onChange={handleChange}
                  ></input>
                  </div><br></br>
                  <input type="submit" value="Add Comment" onClick={handleSubmit}></input>
              </div>
            </Col>
          </Row>
          </form>

        </Container>
    </div>
  )
}
