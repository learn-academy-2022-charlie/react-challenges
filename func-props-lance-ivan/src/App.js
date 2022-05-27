import React, { Component } from 'react'
import './App.css';
import Plate from './component/Plate';


 class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu: ["fries", "chicken wings", "lager", "cheese sticks", "burger"],
      order: []
    }
  }
  
  //function called foodItems
   foodItems = (e) => {
      this.setState({order: [...this.state.order, e]})
   }
  
  render() {
    return (
      <>
      <h1>Menu</h1>
      <Plate itemOrdered= {this.state.menu}
      foodItems={this.foodItems}
      />
      <h3>Items Ordered</h3>
      <ul>
        {this.state.order.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
      </>
    )
  }
}


export default App
