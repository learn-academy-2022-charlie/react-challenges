import React, { Component } from 'react'

class ColorChange extends Component {
    constructor(props){
        super(props)

        this.state = {
            colorIndex: 0,
            color: "white"
        }
    }

    changeColor = () => {
        let colorArray = ["green", "blue", "yellow", "red", "purple", "orange"]
        this.setState({colorIndex: this.state.colorIndex +1})
            if(this.state.colorIndex > colorArray.length){
                this.setState({colorIndex: 0})
            }
            let newColor = colorArray[this.state.colorIndex]
            this.setState({color: newColor})
        
    }

    render(){
        const {backgroundColor, colorName} =this.state

        return(
            <>
            <button onClick = {this.changeColor} className = "square"
             style={{height: "100px", width:"100px", margin: "50px", border: "2px solid black", backgroundColor: this.state.color}}>
              
            
             {this.state.color}



            </button>
            </>
        )

    }
}



export default ColorChange