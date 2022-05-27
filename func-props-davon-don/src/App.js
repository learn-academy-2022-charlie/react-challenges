import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      foodMenu:{  
        fItem1:["Burger", 7.50],
        fItem2:["Fries", 3.00],
        fItem3:["Fried Pickels", 3.50],
        fItem4:["Wings(10)", 10.00],
        fItem5:["Sliders(3)", 6.00],
      },
      drinkItems:{
        dItem1:["FountainDrink(L)", 2.00],
        dItem2:["FountainDrink(M)", 1.50],
        dItem3:["FountainDrink(S)", 1.00],
        dItem4:["Guinnes", 4.00],
        dItem5:["Stella Artois", 4.00],
        dItem6:["Heineken", 4.00],
        dItem7:["LongIsland", 5.00],
        dItem8:["Mojito", 5.00],
        dItem9:["ScrewDrivers", 5.00],
        dItem10:["Soju", 4.00]
      },
      order:[]
    }
takeOrder = (item) => {
  this.setState({order: ...this.state.order,item })
}

  }
  render() {
    return (
      <div>App</div>
    )
  }
}
