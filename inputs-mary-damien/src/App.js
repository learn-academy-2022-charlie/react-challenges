import React, { Component } from "react"
import BadRobot from "./components/BadRobot"
import GoodRobot from "./components/GoodRobot"
import PhoneticRobot from "./components/PhoneticRobot"

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
      <BadRobot badText = {this.state.something}/>
      <PhoneticRobot phoneText = {this.state.something}/>
      </>
    )
  }

}

export default App
