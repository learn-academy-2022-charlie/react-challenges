import React, { Component } from 'react'
import Kanyebot from './components/Kanyebot'
import IRobot from './components/IRobot'
import Ultron from './components/Ultron'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }
  nameChange = (e) => {
    this.setState({name: e.target.value})
  }
  render() {
    // console.log(this.state.name)
    return(
      <>
      <h2>Input Text Here</h2>
      <input
      type="text"
      onChange={this.nameChange}
      />
      <Kanyebot 
      updatedState={this.state.name}
      />
      <IRobot 
      updatedState={this.state.name}
      />
      <Ultron 
      updatedState={this.state.name}
      />
      </>
    )
  }
}


export default App;
