import React, { Component } from 'react'
import RollWindow from './components/RollWindow'
import Logger from './components/Logger'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
    currentRoll: 0,
    rollHistory: []
    }
  }

  rollDice = () => {
    let randomNum = Math.floor(Math.random() * (7 - 1) + 1)
    this.setState({ currentRoll: randomNum })
    this.setState({rollHistory: [...randomNum]})
    // ...copies the the contents of an array
  }

  render() {
    return (
      <>

      <RollWindow
       currentRoll={this.state.currentRoll}
       rollDice={this.rollDice}
       />
      <Logger/>

      </>
    )
  }
}

export default App
