import React, { Component } from 'react'

class ClickBox extends Component {

  constructor(props) {
    super(props)
    const arrColor = ["white", "green", "blue", "yellow", "red",  "purple", "orange"]
    this.state = {
      backgroundColor: arrColor [2], 
      color: arrColor [3]
    }
  }
  
  addSkill = (value, index) => {
      let i = index
    this.setState({
        color: this.state.arrColor [1],
        backgroundColor: this.state.arrColor [1]})
  }
    
  render() {
    const { backgroundColor, color} = this.state
    return (
      <>
        <button 
          onClick={this.addSkill}
          style={ { backgroundColor: backgroundColor, color: color, width: 250, height: 250 } }
        >
          {backgroundColor}
        </button>
      </>
    )
  }
}

export default ClickBox