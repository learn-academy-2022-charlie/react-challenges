import React, { Component } from 'react' 
import Dice from './components/Dice'
import Rolls from './components/Rolls'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      outcome: 0,
      rollLog: []
    }
  }
  rollDice = () => {
    let randomNum = Math.floor(Math.random() * 6 + 1)
    this.setState({outcome: randomNum})
    this.inputRollLog()
  }
  inputRollLog = () => {
    let updatedRollLog = this.state.rollLog.map(value => {
      return value.push(this.state.outcome)
    })
    console.log(updatedRollLog)
    this.setState({rollLog: updatedRollLog})
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