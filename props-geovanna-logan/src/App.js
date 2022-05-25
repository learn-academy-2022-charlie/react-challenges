import React, { Component } from 'react' 
import Dice from './components/Dice'
import Rolls from './components/Rolls'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      outcome: 1,
      rollLog: []
    }
  }
  rollDice = () => {
    let randomNum = Math.floor(Math.random() * 6 + 1)
    let updateLog = this.state.rollLog.concat(randomNum)
    this.setState({rollLog: updateLog})
    this.setState({outcome: randomNum})
  }

  render() {
    return(
      <>
        <h1>Dice Roller</h1>
        <Dice 
          rollDice={this.rollDice}
          outcome={this.state.outcome}
          />
        <Rolls
          loggedItem={this.state.rollLog}
        />
      </>
    )
  }
}

export default App