import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import styles from './Header.module.scss';
import HeadContent from '../HeadInfo/CatInfo'

const header = (props) => {
    return(
        <header className={styles.Header}>
      
        <Navbar bg="primary" variant="light" expand="lg" >
        <Container>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" className='ml-auto' />
      

    

   
       <Navbar.Collapse id="responsive-navbar-nav" >

     
       <div className="pt-2 pb-2 ml-auto">
            <Nav className="ml-auto ">
            <Nav.Link href="/" className={[styles.nav__link, "ml-auto mr-2"].join(' ')}>Home</Nav.Link>
            <Nav.Link href="/" className={[styles.nav__link, "ml-auto  mr-2"].join(' ')}>Cat Info</Nav.Link>
            <Nav.Link href="/" className={[styles.nav__link, "ml-auto  mr-2"].join(' ')}>About</Nav.Link>
            <Nav.Link href="/" className={[styles.nav__link, "ml-auto  mr-2"].join(' ')}>Contact</Nav.Link>
   
        </Nav>
        </div>
        
            </Navbar.Collapse>
        
            </Container>
        </Navbar>
     <HeadContent />
     
            </header>
    )

}






export default header;