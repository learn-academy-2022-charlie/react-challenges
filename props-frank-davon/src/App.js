import React, { Component } from 'react';
import Comp from './Component/Comp';
import './App.css';


class App extends Component {
  constructor (props) {
    super(props) 
  }
  render(){
    return(
      <>
        <h1>Dice Roller</h1>
        <div>
          <h2>Dice</h2>
          <Comp/>
        </div>
        <div>
          <h2>Rolls</h2>
        </div>       
      </>
    )
  }
}

export default App;
