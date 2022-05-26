import React, { Component } from 'react'

class Ultron extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    notListening = () => {
        let userInput = this.props.updatedState
        let bla = ["b", "l", "a"]
        // bla.map(input => {
        //     return input.replace(/[a-z]/, "bla")
        // }) 

        this.setState(userInput.replace(/[a-z]/, "test"))
        
    }
    render() {
        return(
            <>
            <h3>Ultron</h3>
            <p>{this.state.notListening}</p>
            </>
        )
    }
}

export default Ultron