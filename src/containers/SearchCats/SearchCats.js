import React, {Component} from 'react';
import {Form, Container, Col, Row} from 'react-bootstrap';
import styles from './SearchCats.module.scss';
import axios from 'axios';


class SearchCats extends Component{
    state = {
        allBreeds: [],

    }
    componentDidMount(){
        axios.get('/breeds').then(response=>{
            this.setState({allBreeds: response.data});
         
        })
    }
   selected = (selectedBreed) => {
       console.log(selectedBreed.value);
   }
render(){
    const breedOptions = this.state.allBreeds.map(breed=> {
        return <option key={breed.id} value={breed.id} >{breed.name}</option>
    })
    return(
        <main className={styles.MainContent}>
            <Container>
  
            <Form.Control as="select" onChange={(e)=>{this.selected(e.target.options[e.target.selectedIndex])}}>
               
               <option  >Choose a breed...</option>
               {breedOptions}
           </Form.Control>
         
          
             
          
            </Container>
 
        </main>

    )
}
}

export default SearchCats;