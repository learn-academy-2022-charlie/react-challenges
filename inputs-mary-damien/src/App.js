import React, { Component } from "react"
import GoodRobot from "./components/GoodRobot"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      something: ""
    }
  }

handleChange = (e) => {
this.setState({something: e.target.value})
}

  render() {
    console.log(this.state.something)
    return (
      <>
      <h1>Roboactive Listening</h1>
      <input
      onChange={this.handleChange}
      type="text"
      />
      <GoodRobot goodText = {this.state.something} />
      </>
    )
  }

}

export default App
