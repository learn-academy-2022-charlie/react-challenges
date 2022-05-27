
import React, { Component } from 'react'

class Click extends Component{
constructor(props){
    super(props)
    this.state = {
        colorArr: ['white', 'green', 'blue', 'yellow', 'red', 'purple', 'orange'],
        colorIndex: 0,
        color: "white",
      }
}

handleChange = () => {
  let {colorIndex, colorArr} = this.state;
   this.setState({colorIndex: colorIndex + 1})
   if (colorIndex >= colorArr.length - 1){
     this.setState({colorIndex: 0})
   }
   let newColor = colorArr[colorIndex] 
   this.setState({color: newColor})
  }


  render(){
    let {color} = this.state;
    
    return(
      <>
      <div id= 'whitebox' onClick = {this.handleChange} style = {{backgroundColor: color}}>
          <h1>{color}</h1>
      </div>
      </>
    )
  }
}



export default Click