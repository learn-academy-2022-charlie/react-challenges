import React, { Component } from 'react'

class Dice extends Component{

    render(){
        return(
            
            <div class="Roller">
            <button onClick={this.props.rollDye}>       {this.props.changeNum} 
            </button>

            <h1>Roll The Dye</h1>
            </div>
            
        )
    }
}
export default Dice