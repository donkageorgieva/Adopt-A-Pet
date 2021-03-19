import axios from 'axios';
import React, { Component }from 'react';
import CustomCard from '../../components/Card/Card';

class ChosenBreed extends Component {
    state = {
       
        breed: null,
        imageURL: null,
    }

    componentDidUpdate() {
        if ( this.props.id){
            if(!this.state.breed ||  this.state.breed.id !== this.props.id ){
                axios.get('/images/search?breed_ids=' + this.props.id).then(response=> {
                    this.setState({breed:response.data[0].breeds[0], imageURL: response.data[0].url });
                  
                    console.log(response.data);
                   
                })
            }
        
         
        }
    }
render(){
    let breed = null;
if (this.state.breed){
   if(this.props.id){
    breed =  <CustomCard cat={this.state.breed} imgURL ={this.state.imageURL} energy ={this.state.breed.energy_level > 3 ? 'High' : 'Low'}
    childFriendly ={this.state.breed.child_friendly  > 3 ? 'Friendly' : 'Unfriendly'} weightLB = {this.state.breed.weight.imperial}
     weightKG ={this.state.breed.weight.metric} temperament ={this.state.breed.temperament} dogFriendly ={this.state.breed.dog_friendly  > 3 ? 'Friendly' : 'Unfriendly'}
    />
   }
}

    return(
        <div>
           
      {breed}
    </div>
    )
   
}
    
}


export default ChosenBreed;