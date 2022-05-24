import React, { Component } from 'react'
import Dice from './components/Dice'
import RollLog from './components/RollLog'


class App extends Component{
render(){
  return(
    <>  
    <h1>Click Box to Roll</h1>
    <Dice/>
    <RollLog/>
    </>
    )
  }
}


export default App