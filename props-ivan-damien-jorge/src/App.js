import React, { Component } from 'react'
import Dice from "./components/Dice"
import Roll from "./components/Roll"
import "./App.css"


export default class App extends Component {
  constructor (props) {
    super(props)
    this.state={
      dyeRoller: 0
      }
  } 
  randomNum=()=>{
        
    let newNum = (Math.ceil(Math.random() * 6))
    this.setState({dyeRoller: newNum})
     
 }
  render() {
    return (
      <>
      
      <Dice 
      changeNum = {this.state.dyeRoller}
      rollDye = {this.randomNum}
      />
      <Roll />
     
      </>

    )
  }
}
