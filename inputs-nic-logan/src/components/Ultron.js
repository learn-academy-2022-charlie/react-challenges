import React, { Component } from 'react'

class Ultron extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    notListening = () => {
        let userInput = this.props.updatedState
        if (typeof userInput === "string")
        
    }
    render() {
        return(
            <>
            <h3>Ultron</h3>
            <p>{this.props.updatedState}</p>
            </>
        )
    }
}

export default Ultron