import React, { Component } from 'react'
import Plate from './components/Plate'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      foodArr: ["Ribs", "Pizza", "Tacos", "Chicken"],
      price: [15.99, 9.99, 6.99, 11.99],
     //  menu: [
     //    {food: "Ribs", price:15.99},
     //    {food: "Pizza", price:9.99},
     //    {food: "Tacos", price:6.99},
     //    {food: "Chicken", price:11.99},
     // ],
     //this.state.menu.food for a food item
     //this.state.menu.price for a price

      }

    }

  render(){
    console.log(this.state.menu);
    return(
      <>
        <h1>Welcome to foodHub</h1>
        <h2>Menu</h2>
        <Plate
        menu={this.state.foodArr}/>

      </>
    )
  }
}

export default App


// Challenge
// As a developer, I am tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future, so I am tasked with creating a solid foundation from which the code base can grow.
//
// As a user, I can see an application that has a list of food items and the price of each item
//created 2 variables that store arrays with data for each food and price
// As a user, I can select an item I wish to order
//will have to create a list displaying each food item, and selectable with a button. onClick, to keep dynamic use props-> so we can change the array of food items whenever
// As a user, I can see the items I have selected displayed on the page
//oncce and item is selected we add it to a new list displaying what was selected
// Stretch Challenges
// As a user, I can see the total cost of my current order
// As a user, I can see both the base total of my food selections and the total that includes sales tax
// As a user, I can see the total that includes sales tax rounded to two decimals
// As a user, I can see an image of my food selection on the menu
