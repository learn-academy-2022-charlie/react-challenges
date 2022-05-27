import React, { Component } from 'react'

class Square extends Component {
    // This is state
    // State is dynamic
    // Should have default values
    constructor(props){
        super(props)
        this.state = {
            colorIndex: 0,
            color: "white"
        }
      }

      // This is how you change state
      changeColor = () => {
        let colorsArray = ["green", "blue", "yellow", "red", "purple", "orange"]

        // This is a very important method, this is what actually changes it

        this.setState({colorIndex: this.state.colorIndex + 1})

        if(this.state.colorIndex > colorsArray.length){
            this.setState({colorIndex: 0})
        }

        let newColor = colorsArray[this.state.colorIndex]
        
        this.setState({color: newColor})
      }

  render() {
    return (
     <>
        <button onClick={this.changeColor} className="square" style={{height: "100px", width:"100px", margin: "20px", border: "2px solid black", backgroundColor: this.state.color}}>

        {/* Within the render, this is how you use state */}
            {this.state.color}

        </button>
     </>
    )
  }
}

export default Square