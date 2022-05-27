import React, { Component } from 'react'
import Order from './Components/Order'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodList: ["steak", "burger", "soup","fried chicken"],
      order: []
    }
  }

  takeOrder = (item) => {
    this.setState({order: [...this.state.order, item]})
  }


  render() {
    return (
      <>
      <h1> Food Ordering App </h1>
      < Order 
       foodList = {this.state.foodList}
       takeOrder = {this.takeOrder}
       />


      </>
    )
  }
}
export default App