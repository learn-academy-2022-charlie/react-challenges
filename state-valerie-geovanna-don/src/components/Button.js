import React, {Component} from 'react'

class Button extends Component{
  constructor(props) {
    super(props)
    this.state = {
      colorName: "white",
      colorArray: ["green","blue","yellow", "red", "purple", "orange"]

    }
  }

  changeColor = () => {
    this.setState ({colorName: this.state.colorArray[Math.floor(Math.random() * 6)]})
  }
  render() {
    const buttonStyle = {
      color: "black",
      backgroundColor:this.state.colorName,
      width: "200px",
      height: "100px"
    }
    return(
      <>
      <button onClick = {this.changeColor} style = {buttonStyle}> {this.state.colorName} </button>
      </>
    )
  }
}
export default Button;
