import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class PostDetail extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
        title: props.postTitle,
        scale: props.scale,
        description: props.description,
        link: props.linkToIt
      };
    }


  render() {
    return (
      <Container>
          <>
          
                  
                      <td><b>{this.state.title}</b> makes me happy!</td>
                      <br/>
                      <td> It makes me <b>{this.state.scale}</b>/10 happy!</td>
                      <br/>
                      <td> why does it make me happy? <b>{this.state.description}</b></td>
                      <br/>
                      <td> Click here to see it: <b>{this.state.link}</b></td>
                      <br/>
                      <br/>
                      Comments:
                      <br/>
                      
                      
                  
              
          </>
      </Container>
    )
  }
}
