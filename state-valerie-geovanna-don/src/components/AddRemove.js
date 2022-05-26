import React, { Component } from 'react'
import Button from './Button'


class AddRemove extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonCounter: 1,
            buttonArray:[<tr><Button/></tr>]
        }

    }

    
    addButton = () => {
        this.setState({buttonCounter: this.state.buttonCounter + 1})
        this.state.buttonArray.push(<tr><Button/></tr>)
    //  |--------array--------|
    }
    removeButton = () => {
        if (this.state.buttonCounter > 1){
            this.setState({buttonCounter: this.state.buttonCounter - 1})
            this.state.buttonArray.shift()
        } else {
            this.setState({buttonCounter: 1})
        }
    }

    render() {
        let {buttonCounter} = this.state
        let {buttonArray} = this.state

        return(
        <>
        <h2>Number of Buttons: {buttonCounter} </h2>
        <button onClick = {this.addButton}>ADD</button>
        <button onClick = {this.removeButton}>REMOVE</button>
        
        <table style = {{margin: "auto"}}>{buttonArray}</table>

        </>
        )
    }
}

export default AddRemove