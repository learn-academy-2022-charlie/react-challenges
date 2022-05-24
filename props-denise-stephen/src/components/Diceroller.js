import React, { Component } from 'react'

export default class Diceroller extends Component {
  render() {
    return (
      <div>Diceroller 
          {
              this.props.numberolls
          }
      </div>
    )
  }
}
