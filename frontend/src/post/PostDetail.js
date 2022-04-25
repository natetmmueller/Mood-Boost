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
    // let data; 
    
    // Axios.get(`/post/?id=${params.id}`).then((response) => {
    //     console.log(response.data)
    //     //  setPost(await response.data)
    //      data = response.data
    //     console.log(post,"post")
    //   })
    //     .catch((error) =>{
    //       console.log(error)
        
    //   })
      
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


// export default class PostDetail extends Component {
//     constructor(props) {
//       super(props)
    
//       console.log(props,"line 9 PD")
//     //   console.log(props.params,"this is the props.params")
//     //   console.log(props.match.params.id)
//      let url = new URLSearchParams(window.location.search).get('id')
//      console.log(url, "url")
//     }

//     componentDidMount(){
//         console.log(this.props,"this.props")
//         this.showPostDetail(this.props.match.params.id)
//     }
    
//     state = {
//         title: this.props.postTitle,
//         scale: this.props.scale,
//         description: this.props.description,
//         link: this.props.linkToIt
//       };

//       showPostDetail = (id) => {
//         Axios.get(`post?id=${id}`).then((response) => {
//           console.log(response.data)
//         })
//           .catch((error) =>{
//             console.log(error)
          
//         })
//       }
    


//   render() {
//       console.log(this.props.match.params, "match.params")
//     return (
//       <Container>
//           <>
          
                  
//                       <td><b>{this.state.title}</b> makes me happy!</td>
//                       <br/>
//                       <td> It makes me <b>{this.state.scale}</b>/10 happy!</td>
//                       <br/>
//                       <td> why does it make me happy? <b>{this.state.description}</b></td>
//                       <br/>
//                       <td> Click here to see it: <b>{this.state.link}</b></td>
//                       <br/>
//                       <br/>
//                       Comments:
//                       <br/>
                      
                      
                  
              
//           </>
//       </Container>
//     )
//   }
// }
