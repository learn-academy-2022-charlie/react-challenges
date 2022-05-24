import React, {
    Component } from 'react'
    import Square from './Square'

    class Button
    extends Component {
        constructor(props){
            super(props)
            this.state = {
                count: 0 ,
                squareContainer:[]
            }
        }

        addSquare =() => {
            let newCount = this.state.count + 1
            console.log(newCount)
            let newArray = []
            this.setState({count: newCount})
            //this.setState({squareContainer:[]})
            for(let i = 0; i < newCount; i++){
                newArray.push(Square)
            }

            this.setState({squareContainer:newArray})
            console.log(this.state.squareContainer)
          }    
        

        removeSquare =() => {
            if(this.state.count <= 0) {

            } else {
                let newCount = this.state.count - 1
                console.log(newCount)
                let newArray = []
                this.setState({count: newCount})
                //this.setState({squareContainer:[]})
                for(let i = 0; i < newCount; i++){
                    newArray.push(Square)
            }
                this.setState({squareContainer:newArray})
            }

            
     } 
        

        render(){
            return(
                <>
                
                {this.state.squareContainer.map(obj => 
                    <Square />


                    )}
                <button onClick ={this.removeSquare}>remove</button>
                <button onClick={this.addSquare}>add</button>
                </>
            )
        }
    }
    export default Button