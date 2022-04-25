import React, { Component, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Axios from 'axios'
import { useParams } from 'react-router'

export default function PostDetail(props) {
    const params = useParams()

    const [post,setPost] = useState(null)


    console.log(params.id)

    useEffect(() => {
        Axios.get(`/post/?id=${params.id}`).then((response) => {
            console.log(response.data)
            setPost(response.data)
            console.log(post,"post")
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
            <br/> 
        </div>
        } 
        </>
    </Container>
  )
}


