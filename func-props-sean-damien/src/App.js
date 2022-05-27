import React, { Component } from 'react'

export default class App extends Component {
  constructor (props){
    super(props)
    this.state={
      menu:[
        {item:"steak", price: 15.00},
        {item:"brisket", price: 10.00},
        {item:"beer", price: 6.00},
        {item:"potato salad", price: 5.00},
      ]
    }
  }
  render() {
    return (
      <>
      <h1>myApp</h1>
      <ul>
        
        {this.state.menu.map((value) => {return <li>{value.item} , ${value.price}</li>

        })}
        
      </ul>
      </>
    )
  }
}

