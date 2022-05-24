import React, {Component} from 'react'

class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            colorIndex: 0,
            color: "black"
        }
    }
    changeColor =()=>{
        let newIndex = this.state.colorIndex + 1
        this.setState({colorIndex: newIndex})
        let colorsArray = ["green", "blue", "yellow", "red", "purple", "orange"]
        let newColor = colorsArray[this.state.colorIndex]
        if(this.state.colorIndex > colorsArray.length){
                this.setState({colorIndex: 0})
            }
        this.setState({color: newColor})
    }


    render () {
        return(
        <> 
        <button onClick={this.changeColor} id="Box" style={{height: "100px", width: "100px", margin:"50px", border: "2px solid black", display:"block",backgroundColor: this.state.color}}> 
        {this.state.color}
        </button>

        </>
    )
}
}

export default Box