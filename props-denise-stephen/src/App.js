import React, { Component } from 'react'
import Diceroller from './components/Diceroller'
import Tracker from './components/Tracker'
import "./App.css"

export default class App extends Component {
  constructor( props){
    super(props) 
    this.state = {
      number: 0,
    }
  }
  render() {
    return (
      <>
      <div id = "diceroll">
       <Diceroller
       numberolls = {this.state.number}/>
      </div>
      <div id = "trackdice">
      <Tracker 
       numberolls = {this.state.number}/>
       </div>
      </>
     
    )
  }
}
