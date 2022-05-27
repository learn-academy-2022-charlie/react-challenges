import React, { Component } from 'react'
import './App.css'
import Click from './Components/Click'
class App extends Component{
  constructor (props){
    super (props)
    this.state = {
      addClick: this.props.Click,
      objects: {},
    }
    }
    addBox = () => {
      this.setState({addClick: this.state.addClick + this.state.addClick})
      
  }


  render(){
    return(
      <>
      <div> {this.props.Click} </div>
      <div> {this.state.addClick} </div>
      <button onClick = { this.addBox } >add color box</button>
      < Click />
      < Click />
      < Click />
      </>
    )
  }
}

export default App