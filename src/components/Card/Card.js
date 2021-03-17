import React from 'react';
import {Card} from 'react-bootstrap';

const card = (props) => {

let catInfo;
if (props.cat){
    catInfo =   <React.Fragment>
           <Card.Img variant="top" src={props.imgURL} />
        <Card.Title>{ props.cat.name}</Card.Title>
    <Card.Text>{ props.cat.description}</Card.Text>
    <Card.Text></Card.Text>
        </React.Fragment>
}


return (


    <Card className ="mt-3">
        <Card.Img variant="top" />
        <Card.Body>

          {catInfo}
            <Card.Text></Card.Text>
            <Card.Text></Card.Text>
         
        </Card.Body>
    </Card>
)
}




export default card;