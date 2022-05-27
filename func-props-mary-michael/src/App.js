import React, { Component } from 'react'
import Plates from './components/Plates.js'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      foodItems: ["hamburger", "fries", "soda", "fried pickles"],
      foodPrices: [5.50, 3.25, 1.50, 2.75]
      // basket: []
      // basket: to be used when ready to implement
    }
  }










  render(){
    return(
      <>
        <h1>Texas Burgers</h1>
        <Plates 
        foodItems={this.state.foodItems} 
        />
        <h2>Menu</h2>
      </>
    )
  }
}

export default App
