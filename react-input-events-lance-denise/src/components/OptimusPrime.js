import React, { Component } from 'react'

class OptimusPrime extends Component {
  //function called repeat that repeats the user input

    repeatIt = (userInput) => {
        return userInput
    }
  
  
  
    render() {
    return (
        <>
            <h3>OptimusPrime</h3>
            <h4>Should we roll out with this statement?:</h4>
            <p>{this.repeatIt(this.props.robotString)}</p>
        </>

    )
  }
}



export default OptimusPrime
