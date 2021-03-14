import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6,

}

class BurgerBuilder extends Component  {


    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
            
        },
        totalPrice: 4,
        shouldDisable : true,
        shouldCheckout: false,
    }

    addIngredientHandler = (type)=> {

        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
       const updatedIngredients = {...this.state.ingredients};
       const ingredientPrice = INGREDIENT_PRICES[type];
       let updatedTotalPrice = this.state.totalPrice + ingredientPrice;

       updatedIngredients[type] = updatedCount;
    

       

       this.setState({ingredients: updatedIngredients, totalPrice: updatedTotalPrice});
       this.checkIngredients(updatedIngredients);

    }
    removeIngredientHandler = (type)=>{
      
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = this.state.ingredients[type] - 1;
        if (updatedIngredients[type]>=0){
            let updatedTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({ingredients: updatedIngredients, totalPrice: updatedTotalPrice});
        }
     this.checkIngredients(updatedIngredients);


    }
    checkIngredients = (ingredients) => {
       const sum = Object.values(ingredients).reduce((prevValue,currValue)=>prevValue+currValue);
      sum > 0  ?  this.setState({shouldDisable:false}) : this.setState({shouldDisable:true})
          

  
       

    }
    shouldDisable = () => {
        const ingredientsInfo = {
            ...this.state.ingredients
        };
        const ingredientsList =  Object.keys(ingredientsInfo).map((ingredient)=> {
            return ingredient > 0;
        })
  
       ingredientsList.length>0 ?  this.setState({shouldDisable : true}) : this.setState({shouldDisable : false});
   
       
  
    }
   checkOut = () => {
      this.setState({shouldCheckout: true})
    }
    toggleModal = () => {
        const toggle = !this.state.shouldCheckout;
        this.setState({shouldCheckout: toggle})
    }
    continueToCheckout = () => {
        console.log('You continue');
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
    //     let checkoutInfo;
    //   this.state.shouldCheckout ? checkoutInfo = <Modal><OrderSummary ingredients={this.state.ingredients}/></Modal>:
    //   checkoutInfo = null
    
      
        return (
            <React.Fragment>
               <Burger ingredients = {this.state.ingredients}/>
               <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved ={this.removeIngredientHandler}
               disabled={disabledInfo} price={this.state.totalPrice.toFixed(2)} 
               orderDisable={this.state.shouldDisable} checkout={this.checkOut}/>
            <Modal show={this.state.shouldCheckout} toggle={this.toggleModal}>
            <OrderSummary ingredients={this.state.ingredients} toggle={this.toggleModal}
            price={this.state.totalPrice.toFixed(2)} continueToCheckOut={this.continueToCheckout}/>
           
            </Modal >
            
            
            </React.Fragment>
        )
    }
  

}

export default BurgerBuilder;