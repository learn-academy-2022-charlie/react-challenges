import React, { Component } from 'react'
import ClickBox from './components/ClickBox'
import Square from './components/Square'
import AddBoxButton from './components/AddBoxButton'

class App extends Component{
  
  render(){
    this.state = {
      SqNum: 4
    }
    let {SqNum} = this.state
    
    changeSqNum = () => {

      this.setState({SqNum: {SqNum} + 1})
      
    }
    

    return(
      <>
        <h1>Don't click the boxes</h1>
          <button type="button" onClick={this.changeSqNum}>
              Add square
          </button>
          <p>SqNum = {SqNum}</p>
          

      </>
    )
  }
}

export default App
