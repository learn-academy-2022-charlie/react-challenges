import React, { Component } from 'react'

class Food extends Component{
  render(){
    return(
      <>
        <ul>
          {this.props.foodItem.map(value =>{
            return (
              <li>
              <button onClick={ ()=> this.props.takeOrder(value)}>{value}</button>
              </li>
            )
          })}
          </ul>
      </>
    )
  }
}

export default Food