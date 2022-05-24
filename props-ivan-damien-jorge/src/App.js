import React, { Component } from 'react'
import Dice from "./components/Dice"
import Roll from "./components/Roll"
import "./App.css"


export default class App extends Component {
  render() {
    return (
      <>
      
      <Dice />
      <Roll />
     
      </>

    )
  }
}
