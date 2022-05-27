import React, { Component } from 'react'
import Food from './Food'


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      foodItems:["Pizza $10", "Salad $8", "Burger $12"],
      order:[]
     
    }
  } 
  takeOrder=(food) =>{
    this.setState({order: [...this.state.order, food]})
  }
  render(){
    return(
      <>
        <h1>Menu</h1>
        <Food
        foodItems={this.state.foodItems}
        takeOrder={this.takeOrder}
        />
      </>
    )
  }
}

export default App
