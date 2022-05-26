import React, { Component } from 'react'

class Dice extends Component{
    constructor(props){
        super(props)
        this.state = {
            button: ''
        }
    }

roll = () => { 
   let diceNum = Math.ceil(Math.random() * 6)
   this.setState({button: diceNum})
}

    render(){ 
        console.log(this.state.button)
      return(
        <>  
        <button onClick = {this.roll} className = "square"
             style={{height: "300px", width:"300px", margin: "50px", border: "2px solid black", fontSize: "100px"}}> {this.state.button} </button>

        </>
        )
      }
    }

    export default Dice