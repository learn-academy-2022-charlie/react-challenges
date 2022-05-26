import React, { Component } from 'react'

class Robot extends Component {

   

  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <p>{this.props.word}</p>
      </>
    )
  }
}

export default Robot