import React, { Component } from 'react'

 class BadRobot extends Component {
  evilIt = (userInput) => {
    console.log("arraying it", userInput.split(" "))
    //if the userInput string is not empty, enact the variable called evil.
    if(userInput !== "") {
        let evil = userInput.split(" ").map(value => {
        
            return value = " Bla"

        })
        return beep
    }


  
}

  render() {
    return (
      <>
        <h3>Bad Robot</h3>
        <h4>The Mean Version</h4>
        <p>{this.beepIt(this.props.robotString)}</p>
    </>

    )
  }
}


export default BadRobot