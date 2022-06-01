import React, { Component } from 'react'

class Comp extends Component{
  
    constructor(props) {
    super(props)
    this.state = {
      randomNum: Math.floor(Math.random (1, 2, 3, 4, 5, 6 ) * 10),
      backgroundColor: "grey", 
      color: "white"
    }
  }
  
  render() {
    const {randomNum, backgroundColor, color} = this.state
    return (
      <>
        <p>DICE: {randomNum}</p>
        <button 
          onClick={this.state.randomNum}
          style={ { backgroundColor: backgroundColor, color: color } }
        >
         Click Box to Roll
        </button>
      </>
    )
  }
}

export default Comp