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

// As a user, I see titles of three robots waiting for my text.
// As a developer, I have three child components that do not hold state (display or dumb component).
// As a user, when I enter text I see the three robots responses update in real time.
// As a developer, I can call an onChange method on the input tag.
// As a developer, I can pass the updated state as props to the child components.
// As a developer, I can see the child components display the user input.
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
  render(){
    return(
      <>
      <input
      type="text"/>
      <GoodRobot/>
      <BadRobot/>
      <KanyeBot5000/>
      </>
    )
  }
}

export default App