import React from 'react';
import {Container, Card, Button} from 'react-bootstrap';


const card = (props) => {
    return(
        <Card>
  <Card.Img variant="top" src={props.imgSrc} />
  
        </Card>
      

    )
}



export default card;