import React, { Component, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Axios from 'axios'
import { useParams } from 'react-router'
import PostComments from './PostComments'
import Comment from './Comment'

export default function PostDetail(props) {
    const params = useParams()

    const [post,setPost] = useState(null)
    // const [comment, setCommment] = useState(null)


    console.log(params.id)

    useEffect(() => {
        Axios.get(`/post/?id=${params.id}`).then((response) => {
            console.log(response.data)
            setPost(response.data)
            console.log(post,"post")
            // setCommment(response.data.comments)
            // console.log(comment)
            // console.log(response.data.comment)
          })
            .catch((error) =>{
              console.log(error)
            
          })

    },[])
    
      
  return (
    <Container>
        <> {post&&
        
        <div>

            
            <h1><b>{post.postTitle}</b> makes me happy!</h1>
            
            <h1> It makes me <b>{post.scale}</b>/10 happy!</h1>
            
            <h1> why does it make me happy?</h1>
            <h1>{post.description}</h1>
            
            <h1> Click here to see it: <b>{post.linkToIt}</b></h1>
        
            Comments:
            <br>
            </br>
            {/* <b>{post.comments.forEach(comment => <li>{{comment.comment}}</li>)}</b> */}
            {/* {comment && <div> {comment.map((e)=> (<li>{e.comment} <button>delete</button></li>))} </div>
            } */}
            <Comment />

            <br/> 
            <PostComments />
        </div>
        } 
        </>
    </Container>
  )
}


