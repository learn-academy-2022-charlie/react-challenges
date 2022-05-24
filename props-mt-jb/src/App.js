import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      roll: 1,
      rollLog: [1]
      // Later, add limit for roll log
    }
  }
 

  handleClick = () => {
        let randomNum = Math.floor((Math.random() * 6) + 1)
       
    this.setState({roll: randomNum})
    this.state.rollLog.push(this.state.roll)
  }
    
  render() {
    return (
      <>
      <h1> Welcome to Dice Roller</h1>
      <button 
      style={
        {height: "100px", width: "100px"}        
      }
      onClick={this.handleClick}>
        
        {`Current number is ${this.state.roll}`}
    
      </button>
      <p>{`${this.state.rollLog}`}</p>
      
      {/* <button
      onClick={this.setState({rollLog: []})}>
      <p>Clear roll log</p>
      </button> */}
      {/* This button is broken in such a way that when enabled, it causes the page to go in an infinite button click. Check the browser console as you debug*/}
      </>
    )
  }
}

export default App