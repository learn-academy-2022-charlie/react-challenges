import PropTypes from 'prop-types'
import React, { Component } from 'react'

 class Dicebox extends Component {
  constructor(props){
      super(props)

  }

  render() {
    return (
        <>
      <div>
          
          <h1>Previous Roll</h1>
          <table>
          {this.props.rollArray}
          </table>
      
      
      </div>
      </>
    )
  }
}

export default Dicebox
