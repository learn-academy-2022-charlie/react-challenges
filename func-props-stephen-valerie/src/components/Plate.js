import React, { Component } from 'react'

class Plate extends Component{
  render(){
    return(
      <>

        <ul>{this.props.menu.map(value => {
          return (<li>{value}</li>)
        })}</ul>
      </>
    )
  }
}

export default Plate
//onClick={() => this.props.
