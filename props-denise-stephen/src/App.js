import React, { Component } from 'react'
import Diceroller from './components/Diceroller'
import Tracker from './components/Tracker'
import "./App.css"

export default class App extends Component {
  constructor( props){
    super(props)
    this.state = {
      numberDice: [1,2,3,4,5,6],
      visRoll: 1
    }
  }
  handleClick = () =>{
    let ranNum = Math.floor(Math.random()*this.state.numberDice.length+1)
    this.setState({visRoll: ranNum})
    console.log(ranNum);
  }
  render() {
    return (
      <>
      <div id = "diceroll">
       <Diceroller
       numberolls = {this.state.visRoll}
       clickMethod = {this.handleClick}/>
      </div>
      <div id = "trackdice">
      <Tracker
       numberolls = {this.state.visRoll}/>
       </div>
      </>

    )
  }
}
