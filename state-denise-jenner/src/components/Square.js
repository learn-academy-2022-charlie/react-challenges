
import React, { Component } from 'react'

class Square extends Component{
    constructor(props){
        super(props)
        this.state = {
            colorIndex: 0,
            color: ""
        }
    }

    changeColor = () => {
        let arrayOfColors = ["green", "blue", "yellow", "red", "purple", "orange"]
        // let x = 0;
        // x = x + 1 // 0 + 1; x = 1
        // x = x + 1 // 1 + 1; x = 2
        // x = x + 1 // 2 + 1; x = 3
        // When working with numbers, SOMETIMES you have to carry over the previous value 

        this.setState({colorIndex: this.state.colorIndex + 1})
        if(this.state.colorIndex > arrayOfColors.length){
            this.setState({colorIndex: 0})
        }
        let newColor = arrayOfColors[this.state.colorIndex]

        // We are completely replacing the value here which is why we do not have to do this.state.blahblahblah
        this.setState({color: newColor})
    }

  

    render() {
        // Destructured
        // let { color } = this.state

        return(
            <>
                <div onClick={this.changeColor} className="square" style={{color: "white", border: "2px solid black", height: "200px", width: "200px", backgroundColor: this.state.color}}>
                   {/* <p>{ color }</p> */}
                   <p style={{color: "black", fontSize: "20px"}}>{ this.state.color }</p>
                </div>
            </>
        )
    }
}

export default Square