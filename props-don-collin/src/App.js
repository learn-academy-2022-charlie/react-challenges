import React, { Component } from 'react'
import Dice from './components/Dice'
import RollRecord from './components/RollRecord'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentRoll: 1,
      arrayRoll: [] 

      
    }

  }

  randomNum = () => {
    this.state.arrayRoll.push(<tr>{this.state.currentRoll}</tr>)
    this.setState({
      currentRoll: Math.floor(Math.random()*6 + 1),
      arrayRoll: this.state.arrayRoll}
      )
  }
  // rollArray = () => {
  //   this.setState({arrayRoll: this.state.arrayRoll.push(<tr>this.state.currentRoll</tr>)})
  // }
  // doubleClick = () => {
  //   this.randomNum();
  //   this.rollArray();
  // }
  
  render() {
    return (
      <>
      <table>

        <th>
      <h1>DICE ROLLER</h1>
      <Dice 
      roll={this.state.currentRoll}
      toss={this.randomNum}
      // both={this.doubleClick}
      />
      </th>

      <th>
      <RollRecord
      // rollMethod={this.rollArray}
      rollRecord={this.state.arrayRoll}
      />
      </th>
      
      </table>

      
      </>
    )
  }
}
