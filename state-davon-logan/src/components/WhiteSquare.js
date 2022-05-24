import { render } from "@testing-library/react"
import React, { Component } from "react"

class WhiteSquare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorText: "",
      colorIndex:0
    }
  }
  squareColor = () => {
    let colorArray = ["white","purple","green","yellow","red","blue"]
    this.setState({colorIndex: this.state.colorIndex + 1})
      if(this.state.colorIndex>colorArray.length){
        this.setState({colorIndex:0})
      }    
    let colorChange = colorArray[this.state.colorIndex]  
    this.setState({colorText: colorChange})
  }

render(){
  let {colorText} = this.state
  return(
    <div className="container">
      <div id="whiteSquare" onClick={this.squareColor} style={
        {backgroundColor: this.state.colorText}
      }>
        <h2>{colorText}</h2>
      </div>
      <button onClick={this.reset}>Reset</button>
    </ div>
  )
}
}

export default WhiteSquare
