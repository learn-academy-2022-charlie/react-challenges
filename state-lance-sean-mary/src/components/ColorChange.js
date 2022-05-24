import React, { Component } from 'react'

class ColorChange extends Component {
    constructor(props){
        super(props)
        const colorArray = ["white", "green", "blue", "yellow", "red", "purple", "orange"]
        this.state = {
            backgroundColor: {},
            colorName: "White",
            count: colorArray[0]
        }
    }

    changeColor = () => {
        this.setState({backgroundColor: this.state.backgroundColor})
        
    }

    render(){
        const {backgroundColor, colorName} =this.state

        return(
            <>
            <div 
              
            >
                <p>White</p>



            </div>
            </>
        )

    }
}



export default ColorChange