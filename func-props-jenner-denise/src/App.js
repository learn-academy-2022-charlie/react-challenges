import React, { Component } from 'react';
import Food from './components/Food'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      foodItems: ["Lobster", "King Crab", "Steak", "Roasted Hen", "Filet Mignon", "Quail", "Wagyu"],
      foodPrices: [70.99, 120.85, 45.34, 50.66, 100, 35.90, 500.50],
      myOrder: [],
      totalCost: 0
    }
  }


  addItem = (item, index) => {
    this.setState({myOrder: [...this.state.myOrder, item]})
    this.setState({totalCost: this.state.totalCost + this.state.foodPrices[index]})
    console.log(this.state.totalCost)
  }
 
  render() {
    console.log("Cost: ", this.state.totalCost)
    return (
      <>
        <Food 
          foodItems={this.state.foodItems}
          foodPrices={this.state.foodPrices}
          addItem={this.addItem}
        />
        <p>Cost</p>
        <p>{parseFloat(this.state.totalCost).toFixed(2)}</p>
        <p>Total Cost</p>
        <p>{parseFloat((this.state.totalCost * .08) + this.state.totalCost).toFixed(2)}</p>
      </>
    );
  }
}

export default App;