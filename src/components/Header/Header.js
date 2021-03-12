import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const header = (props) => {
    return(
        <header>
        <Navbar bg="primary" variant="light" >
        <Nav className='m-auto'>
            <Nav.Link href="/">Adopt</Nav.Link>
            <Nav.Link href="/">Donate</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
        </Nav>
        </Navbar>
     
            </header>
    )

}






export default header;