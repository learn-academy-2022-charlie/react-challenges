import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "white"
    }
  }
  render() {
    let {color} = this.state
    
    return (
      <>
        <div id="box" style={{border: '2px solid black',width: '300px', height: '300px',backgroundColor: {color}}}>

        </div>
      </>
    )
  }
}
export default App