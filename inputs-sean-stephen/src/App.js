import React, {Component} from 'react'
import GoodRobot from './Components/GoodRobot'
import BadRobot from './Components/BadRobot'
import KanyeBot5000 from './Components/KanyeBot5000'
// // Pseudo Code
// As a user, I can see a page with a text input.

//To have an input we need input tag with a text type

// As a developer, I have one parent component that holds state (logic or smart component).

// To get the result of one parent state we utilized constructor method.

//State holds component data and determines how the data behaves-changes over time

// As a developer, I have an input in my parent component.
//we used the input tag <input/>

// As a user, I see titles of three robots waiting for my text.

//we component called our component Robots <Robot/>

// As a developer, I have three child components that do not hold state (display or dumb component).

//the child components do not hold state

// As a user, when I enter text I see the three robots responses update in real time.

//to do this We have to keep track of the state of userInput
//how do we track the state of the user userInput
//this.state stores that information
//this.setState({}) tracks and updates that information

// As a developer, I can call an onChange method on the input tag.

//onchange inside of input tag. Use onChange + handlefunction

// As a developer, I can pass the updated state as props to the child components.

//pass the update state as props --> the child components inherit the those properties

// As a developer, I can see the child components display the user input.
//string interpolate(if we want our text with it) or just call those props
// As a user, I see my "Good Robot" repeating exactly what I type.

// As a user, I see my "Bad Robot" saying BLABLA.... One character for every character I type.

// As a developer, I can create modification to the user input text by creating a method in my child component.

// As a user, I see a third robot that is the developer's choice.

 class App extends Component{
   constructor(props){
     super(props)
     this.state = {
       userInput: ""
     }
   }
   handleChange = (e) =>{
     this.setState({userInput: e.target.value})
   }

  render(){
    console.log(this.state.userInput);
    return(
      <>
      <input
        type="text"
        onChange={this.handleChange}
      />
      <GoodRobot
        silverSurfer={this.state.userInput}
      />
      <BadRobot
        silverSurfer={this.state.userInput}
      />
      <KanyeBot5000
        silverSurfer={this.state.userInput}
      />
      </>
    )
  }
}

export default App
