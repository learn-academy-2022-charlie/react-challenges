import React, { Component } from 'react'
import Square from './Square'

class AddBoxButton extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
      addBox = () => {
    
      }
    render(){
      return(
        <>
          <button type="button" onClick={this.addBox}>
              Add square
          </button>
        </>
      )
    }
  }
  
  export default AddBoxButton