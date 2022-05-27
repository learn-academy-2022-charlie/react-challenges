import React, { Component } from 'react'
import Food from './components/Food'
import Drink from './components/Drink'
import './App.css'



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      foodMenu:[  
        ["Burger", 7.50],
        ["Fries", 3.00],
        ["Fried Pickels", 3.50],
        ["Wings(10)", 10.00],
        ["Sliders(3)", 6.00],
      ],
      drinkItems:[
        ["FountainDrink(L)", 2.00],
        ["FountainDrink(M)", 1.50],
        ["FountainDrink(S)", 1.00],
        ["Guinness", 4.00],
        ["Stella Artois", 4.00],
        ["Heineken", 4.00],
        ["LongIsland", 5.00],
        ["Mojito", 5.00],
        ["ScrewDrivers", 5.00],
        ["Soju", 4.00]
      ],
      order:[]
    }

  }

  takeOrder = (item) => {
    
    this.setState({order: [...this.state.order, item]})
  }

  totalOrder = (array) => {
    let priceArray = []
    this.state.order.map((value,i) => {
      priceArray.push(value[1])
    })
    let total = 0
    priceArray.map(value => {
      total += value
    })
    return total

  }

  render() {
    console.log(this.state.order)
    return (
      <>
      <div className="banner">
        <h1>Davon and Don's Bar and Grill</h1>
      </div>
      <div className="container">
        
          <div className="food">
            <Food 
            foodMenu={this.state.foodMenu}
            order={this.takeOrder}
            />
          </div>
          <div className="drinks">
            <Drink
            drinkMenu={this.state.drinkItems}
            order={this.takeOrder}
            />
        
        
          </div>
         
      <div className = "total">
              <h3>Your order</h3>

              <ul>
                {this.state.order.map((value, i) => {
                  return <li key={i}> {value[0]} </li>
                })}
              </ul>
              <h3>Your total</h3>
                <p>{this.totalOrder(this.state.order)}</p>
                <p>tax {(this.totalOrder(this.state.order) * .08).toFixed(2)}</p>
                <p>total with tax {(this.totalOrder(this.state.order) * 1.08).toFixed(2)}</p>
            </div>
      </div>
      
      </>
    )
  }
}
