import React, { Component } from 'react'

export default class Diceroller extends Component {
  render() {
    return (
      <div>Diceroller
          <div id="diceBlock" onClick = {this.props.clickMethod}>
              <h1>{this.props.numberolls}</h1>

          </div>
      </div>
    )
  }
}
