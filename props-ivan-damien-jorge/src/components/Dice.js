import React, { Component } from 'react'

class Dice extends Component{
    constructor(props){
        super(props)
        this.state={
        dyeRoller: 0
        }
    }
    randomNum=()=>{
        
       let newNum = (Math.ceil(Math.random() * 6))
       this.setState({dyeRoller: newNum})
        
    }

    render(){
        return(
            
            <div class="Roller">
            <button onClick={this.randomNum}>       {this.state.dyeRoller} 
            </button>

            <h1>Roll The Dye</h1>
            </div>
            
        )
    }
}
export default Dice