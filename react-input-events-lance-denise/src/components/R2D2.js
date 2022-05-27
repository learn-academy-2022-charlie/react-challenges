import React, { Component } from 'react'

class R2D2 extends Component {
  //function that takes in a string, turns that string into an array, for each index in that new array (.map()) return "beep"
    beepIt = (userInput) => {
        console.log("arraying it", userInput.split(" "))
        //if the userInput string is not empty, enact the variable called beep
        if(userInput !== "") {
            let beep = userInput.split(" ").map(value => {
            
                return value = "beep "
    
            })
            return beep
        }


      
    }
  
  
    render() {
    return (
        <>
        <h3>R2D2</h3>
        <h4>R2D2 will give his perspective:</h4>
        <p>{this.beepIt(this.props.robotString)}</p>
    </>

    )
  }
}



export default R2D2