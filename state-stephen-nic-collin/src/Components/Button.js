import React, { Component } from 'react'
// import Click from './Components/Click'

class Button extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
   

    return(
      <>
        <button onClick>
          Add color box
        </button>
      </>
    )
  }
}

export default Button