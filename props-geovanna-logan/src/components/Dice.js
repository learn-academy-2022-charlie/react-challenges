import React, { Component } from 'react' 

class Dice extends Component {
    render() {
        return(
            <>
            <div id="dice" onClick = { this.props.rollDice }>
                <h1>{this.props.outcome}</h1>
            </div>
            <h1>Click Box to Roll</h1>
            </>
        )
    }
}

export default Dice