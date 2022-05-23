
import React, { Component } from 'react'

class Click extends Component{
constructor(props){
    super(props)
    this.state = {
        colorArr: ['green', 'blue', 'yellow', 'red', 'purple', 'orange']
    }
}



handleChange = () => {
    let newText = (colorArr) => {

        for(let i=0; i < colorArr.length; i++){
            return colorArr[i]
        }
        
    
    this.setState({colorArr: newText})
}
}


  render(){
    let {colorArr} = this.state
    
    return(
      <div id= 'whitebox' onClick = {this.handleChange} >
          <h1>{colorArr}</h1>
      </div>
    )
  }
}


export default Click