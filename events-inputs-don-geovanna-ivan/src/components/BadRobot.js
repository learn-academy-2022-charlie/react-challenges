import React, { Component } from 'react'

export default class BadRobot extends Component {
    

    badBot = (text) => {
        let blaStr = ""
        // Calculate the length of the user text to determine length of loop
        for (let i = 0; i < text.length; i++){
            if (i === 0) {
                blaStr = "b"
                
            } else if (blaStr[i-1] === "b"){
                blaStr = blaStr + "l"
            } else if (blaStr[i-1] === "l"){
                blaStr = blaStr + "a"
            } else if (blaStr[i-1] === "a"){
                blaStr = blaStr +"b"
            }
                
            }

            //first will always be b
            //then it will check, if previous letter is b, use l
            // if previous letter is l, use a
            // if previous letter is a, use b
        
        // then alternate every element of the array with b, l, a
        // return array joined into string
        
        return blaStr

    }
  
    render() {
      
    return (
        <>
           
            <p>I hear you saying {this.badBot(this.props.userText)}. Is that correct?</p>
        </>
    )
  }
}
