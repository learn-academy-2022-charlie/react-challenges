import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props)
   this.state={
     name:"nothing right now",
     badRobot: ""
   }
  }
 handleChange = (e)=>{
  this.setState({name: e.target.value})
  console.log("This is e: ", e)
  console.log("This is e.target: ", e.target)
  console.log("This is e.target.value: ", e.target.value)
  //this.setState({badRobot:
    //if(this.state.name.length %3 === 0){
      let badString = "BLA"
      badString.repeat(this.state.name.length / 3)
   // }
 // })
//}

// We want to take user input, find the length, and return a string of equal length.
  // We want the string to say "BLABLABLA" to match the length of the user input string. 
  // To find the length, we need this.state.name.length and it will give us a number
    // We want this.state.badRobot to say "BLABLABLA" at the same length as this.state.name.length
  // How do we get "BLABLABLA" into BadRobot 



  render(){
    console.log("The length of this.state.name: ",this.state.name.length)
    return(
      <>
        <h1>Robo Active Listening</h1>
        <input
        type="text"
        onChange={this.handleChange}
        />  
        <h2>Good Robot:</h2>
        <p>I hear you saying {this.state.name}. Is that correct?</p>
        <h2>Bad Robot:</h2>
        <p>I hear you saying {this.state.badRobot}. Is that correct?</p>
          
        <h2>Kanyebot 5001:</h2>
        <p>I'm gonna let you finish, but Beyonce is {this.state.name} of ALL TIME</p>
      </>
    )
  }
}

export default App