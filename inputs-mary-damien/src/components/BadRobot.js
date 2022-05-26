import React, { Component } from "react"

class BadRobot extends Component {


    blazinator = () => {
        let newStr = ""
       for(let i = 0; i < this.props.badText.length; i++ ) {
           if( i % 3 === 0) {
               newStr += "B"
           } else if( i % 3 === 1) {
               newStr += "L"
           } else {
               newStr += "A"
           }
       }
       return newStr
    }


  render() {

    return (
      <>
      <h2>Bad Robot</h2>
      <p>{this.blazinator(this.props.badText)}</p>
      </>
    )
  }

}

export default BadRobot
