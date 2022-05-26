import React, { Component } from 'react'
import Robot from './components/Robot'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: ""
    }
  }

  handleChange = (e) => {
    this.setState({word: e.target.value})
  }

  blah = (word) => {
    // create variable named blahString to hold a string
    // Use for loop to iterate through word
    // use conditonals to decide what letter should be added
    // Conditional if blahString === "" 
    // blahString = blahString + B 
    // Conditional if blahString i-1 === B   
    // blahString = blahString + L
    // Conditional if blahString i-1 === L   
    // blahString = blahString + A
    // Conditional if blahString i-1 === A  
    // blahString = blahString + B

    let blahString = ""
    for(let i=0; i<word.length; i++){
        if(blahString === ""){
            blahString = blahString + "B"
        } else if(blahString[i-1] === "B"){
            blahString = blahString + "L"
        } else if(blahString[i-1] === "L"){
            blahString = blahString + "A"
        } else if(blahString[i-1] === "A"){
            blahString = blahString + "B"
        }
    }
    return `I hear you saying  ${blahString}  . Is that correct?`
}

  render() {
    console.log("render log:", this.state.word) 
    return (
      <>
        <h1>Greeter App</h1>
        <p>Say Something</p>
        <input 
          type="text"  
          onChange={this.handleChange}
        />

        <Robot
        name="Good Robot"
        firstName="Jenner"
        word={'I hear you saying ' + this.state.word + '. Is that correct?'}
        />

        <Robot
        name="Bad Robot"
        word={this.blah(this.state.word)}
        />

        <Robot
        name="Kanyebot 5000"
        word={'I\'m gonna let you finish but Beyonce is ' + this.state.word}
        />
      </>
    )
  }
}

export default App