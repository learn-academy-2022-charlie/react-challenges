import React, { Component } from "react"

class PhoneticRobot extends Component {

  phonetics = () => {
    let newStr = ""
    let inputText = this.props.phoneText
      for(let i = 0; i < inputText.length; i++ ) {
          switch(inputText[i].toLowerCase()){
            default:
              break
            case "a":
              newStr += "Alpha "
              break
            case "b":
              newStr += "Bravo "
              break
            case "c":
              newStr += "Charlie "
              break
            case "d":
              newStr += "Delta "
              break
            case "e":
              newStr += "Echo "
              break
            case "f":
              newStr += "Foxtrot "
              break
            case "g":
              newStr += "Golf "
              break
            case "h":
              newStr += "Hotel "
              break
            case "i":
              newStr += "India "
              break
            case "j":
              newStr += "Juliet "
              break
            case "k":
              newStr += "Kilo "
              break
            case "l":
              newStr += "Lima "
              break
            case "m":
              newStr += "Mike "
              break
            case "n":
              newStr += "November "
              break
            case "o":
              newStr += "Oscar "
              break
            case "p":
              newStr += "Papa "
              break
            case "q":
              newStr += "Quebec "
              break
            case "r":
              newStr += "Romeo "
              break
            case "s":
              newStr += "Sierra "
              break
            case "t":
              newStr += "Tango "
              break
            case "u":
              newStr += "Uniform "
              break
            case "v":
              newStr += "Victor "
              break
            case "w":
              newStr += "Whiskey "
              break
            case "x":
              newStr += "X-Ray "
              break
            case "y":
              newStr += "Yankee "
              break
            case "z":
              newStr += "Zulu"
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
