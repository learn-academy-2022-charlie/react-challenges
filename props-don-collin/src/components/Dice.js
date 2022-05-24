import React, { Component } from 'react'

export default class Dice extends Component {
  render() {

    const diceStyle = {
        width: "300px",
        height: "300px",
        fontSize: "50px"
    }

    return (
      <>
      <h1>DICE</h1>
      <button style = {diceStyle} onClick={this.props.toss}>
          {this.props.roll}
      </button>
      
      </>
    )
  }
}
