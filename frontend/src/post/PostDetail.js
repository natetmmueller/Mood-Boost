import React, { Component, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Axios from 'axios'
import { useParams } from 'react-router'
import PostComments from './PostComments'
import Comment from './Comment'

export default function PostDetail(props) {
    const params = useParams()

    const [post,setPost] = useState(null)
    const [comment, setCommment] = useState(null)


    console.log(params.id)

    useEffect(() => {
        Axios.get(`/post/?id=${params.id}`).then((response) => {
            console.log(response.data)
            setPost(response.data)
            console.log(post,"post")
            setCommment(response.data.comments)
            console.log(comment)
            console.log(response.data.comment)
          })
            .catch((error) =>{
              console.log(error)
            
          })

    },[])
    
      
  return (
    <Container>
        <> {post&&
        <div>
            <td><b>{post.postTitle}</b> makes me happy!</td>
            <br/>
            <td> It makes me <b>{post.scale}</b>/10 happy!</td>
            <br/>
            <td> why does it make me happy? <b>{post.description}</b></td>
            <br/>
            <td> Click here to see it: <b>{post.linkToIt}</b></td>
            <br/>
            <br/>
            Comments
            <br>
            </br>
            {/* <b>{post.comments.forEach(comment => <li>{{comment.comment}}</li>)}</b> */}
            {comment && <div> {comment.map((e)=> (<li>{e.comment} <button>delete</button></li>))} </div>
            }
            <br/> 
            <PostComments />
        </div>
        } 
        </>
    </Container>
  )
}


