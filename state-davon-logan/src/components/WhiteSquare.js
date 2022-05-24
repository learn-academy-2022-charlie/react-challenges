import React, { Component } from "react"

class WhiteSquare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorText: ""
    }
  }
  squareColor = () => {
    this.setState({colorText: "white"})
  }
  reset = () => {
    this.setState({colorText: ""})
    }

  render() {
    let { colorText } = this.state

    return (
      <div className="container">
        <div id="whiteSquare" onClick={this.squareColor}>
          <h2>{colorText}</h2>
        </div>
        <button onClick={this.reset}>Reset</button>
      </ div>
    )
  }
}

export default WhiteSquare
