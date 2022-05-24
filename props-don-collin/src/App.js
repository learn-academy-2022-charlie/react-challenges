import React, { Component } from 'react'
import Dice from './components/Dice'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentRoll: 1 
      
    }

  }

  randomNum = () => {
    this.setState({currentRoll: Math.floor(Math.random()*6 + 1)})
  }
  
  render() {
    return (
      <>
      <h1>DICE ROLLER</h1>
      <Dice 
      roll={this.state.currentRoll}
      toss={this.randomNum}
      />
      
      </>
    )
  }
}
