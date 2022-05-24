import React, { Component } from 'react'

class RollLog extends Component{
    constructor(props){
        super(props)
        this.state = {
            log: []
        }
    }



    render(){ 
        
      return(
          <p>{this.props.number}</p>
      )
      }
    }


export default RollLog