import React, { Component } from 'react'


class RollWindow extends Component {
  render() {
    return (
      <>
      <div style={{border: "2px solid black", height: "400px", width: "400px"}}>
        <div onClick={this.props.rollDice} style={{border: "2px solid black", height: "100px", width: "100px"}}>
          <p>{this.props.currentRoll}</p>
        </div>
          <p>Click Box to Roll</p>
      </div>

      </>
    )
  }
}

export default RollWindow
