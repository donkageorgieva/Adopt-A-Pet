import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import { LightningChargeFill, LightningCharge, EmojiFrown, EmojiLaughingFill, Thermometer} from 'react-bootstrap-icons'

const card = (props) => {

let catInfo;
if (props.cat){
    catInfo =   <React.Fragment>
           <Card.Img variant="top" src={props.imgURL} style={{height: "30vh", objectFit: "contain", width: "100%"}}/>
        <Card.Title className="mt-3">{ props.cat.name}</Card.Title>
        <Card.Text>{ props.cat.description}</Card.Text>
     
        <ListGroup>
        <ListGroupItem border="primary" variant="primary"> <strong className="mr-2" >Temperament:</strong> { props.temperament} <Thermometer /></ListGroupItem>
        <ListGroupItem  border="primary" variant="primary"> <strong className="mr-2">Weight  : </strong>     {props.weightKG}kg ({props.weightLB}lb) </ListGroupItem>
       <ListGroupItem  border="primary" variant={props.energy === "Low" ? "danger" : "success"}> <strong className= "mr-2">Energy Level:  </strong>   {props.energy} {props.energy  === "Low" ?  <LightningCharge /> : <LightningChargeFill/>}  </ListGroupItem>
       <ListGroupItem  border="primary"  variant={props.childFriendly === "Unfriendly" ? "danger" : "success"}> <strong className= "mr-2">Child Friendly:</strong> {props.childFriendly} {props.childFriendly === 'Friendly' ? <EmojiLaughingFill /> : <EmojiFrown />} </ListGroupItem>
       <ListGroupItem  border="primary"  variant={props.dogFriendly === "Unfriendly" ? "danger" : "success"}> <strong className= "mr-2">Dog Friendly:</strong> {props.childFriendly} {props.childFriendly === 'Friendly' ? <EmojiLaughingFill /> : <EmojiFrown />} </ListGroupItem>
        </ListGroup>


        </React.Fragment>
}


return (


    <Card className ="mt-3"  border="primary" >
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