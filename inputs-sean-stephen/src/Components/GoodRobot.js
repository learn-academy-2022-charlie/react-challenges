import React, { Component } from 'react'

class GoodRobot extends Component{
  render(){
    return(
      <>
        <h1>GoodRobot</h1>
        <p>Are you typing: {this.props.silverSurfer}?</p>
      </>
    )
  }
}

export default GoodRobot
