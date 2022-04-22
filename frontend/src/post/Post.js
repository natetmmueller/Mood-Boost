import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";


export default class Post extends Component {


  render() {
  
    return (
        <Card className="cards" border="warning" style={{ width: '18rem' }}>
            <>
                <Card.Header>{this.props.postTitle}</Card.Header>
            
                
                <td>{this.props.scale}</td>
                <td>{this.props.description}</td>
                <td>{this.props.linkToIt}</td>
                <td>
                    <Card.Footer className="cardFooter">
                        <Button variant="info" className="lm postButton">
                            Learn More
                        </Button>

                        <Button variant="info" className="edit postButton"
                            onClick={() => {
                            this.props.editView(this.props._id);
                            }}
                        >
                            Edit
                        </Button>

                        <Button variant="info" className="del postButton"
                            onClick={() => {
                            this.props.deletePost(this.props._id);
                            }}
                        >
                            Delete
                        </Button>
                    </ Card.Footer>
                    
            </td>
        
            </>
      </Card>
    );
  }
}
