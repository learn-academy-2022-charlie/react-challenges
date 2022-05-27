import React, { Component } from 'react'
import Plates from './components/Plates.js'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      foodItems: ["hamburger", "fries", "soda", "fried pickles"],
      foodPrices: [5.50, 3.25, 1.50, 2.75]
    }
  }
  render(){
    return(
      <>
        <h1>Texas Burgers</h1>
        <h2>Menu</h2>
      </>
    )
  }
}

export default App
