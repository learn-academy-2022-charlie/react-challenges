import React, { Component } from 'react'

class Roller extends Component {
    render(){
        const diceStyle = {
            width: "300px",
            height: "300px",
            fontSize: "50px",
        }
        return(
            <>
           
                <button style= {diceStyle} onClick={this.props.rollClick}>
                    
                    {this.props.rolling}
                </button>
            
            </>
        )
    }
}


export default Roller