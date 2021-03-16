import React from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';
import styles from './CatInfo.module.scss'

const catInfo = (props) => {

    return(
        <section className={[styles.CatInfo, "d-flex align-items-center"].join(' ')}>
            <Container >
           <Row >
               <Col>
               <h1 > Cats?</h1>
               <h2>Find out information about any cat breed in just a single click! </h2>
               <p className="pt-2">Are you a future cat owner looking to adopt or purchase the perfect cat for your lifestyle? 
                   Or are you just a huge cat geek? It doesn't matter! Find out the cat info you was looking for!
               </p>
               <Col>
               <Row>
               <form action="/" className="mr-3">
               <Button variant = "primary" type="submit">Start now</Button>
               </form>
       <form action="/" className="ml-1">
       <Button variant = "outline-info" type="submit">Learn more</Button>
       </form>
               </Row>
       
               </Col>
         
       

      
              
               </Col>
               
         <Col>
         
         </Col>
          
           </Row>
      
         
            </Container>
            
        </section>
    )

}






export default catInfo;