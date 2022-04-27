import React, { Component, useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router'


export default function Comment(props) {
    const params = useParams()

    const [comment, setCommment] = useState(null)

    useEffect(() => {
        Axios.get(`/post/?id=${params.id}`).then((response) => {
            setCommment(response.data.comments)
            console.log(comment)
            console.log(response.data.comment)
          })
            .catch((error) =>{
              console.log(error)
            
          })

    },[])
  
  
  
    return (
    <div>
        {comment && <div> {comment.map((e)=> (<li>{e.comment} <button>delete</button></li>))} </div>
        }
    </div>
  )
}

