import React, { Component } from "react"

class PhoneticRobot extends Component {

  phonetics = () => {
    let newStr = ""
    let inputText = this.props.phoneText
      for(let i = 0; i < inputText.length; i++ ) {
          switch(inputText[i]){
            default:
              break
            case "a":
              newStr += 'Alpha '
              break
            case "b":
              newStr += 'Bravo '
              break
            case "c":
              newStr += 'Charlie '
              break
            case "d":
              newStr += 'Delta '
              break
            
          }
      }
      return newStr
    }


  render() {

    return (
      <>
        <h2>Phonetic Robot</h2>
        <p>{this.phonetics(this.props.phoneText)}</p>
      </>
    )
  }

}

export default PhoneticRobot
