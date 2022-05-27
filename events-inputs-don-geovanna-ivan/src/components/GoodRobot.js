import React, { Component } from 'react'

export default class GoodRobot extends Component {
  render() {
    return (
        <>
           
            <p>I hear you saying {this.props.userText}. Is that correct?</p>
        </>
    )
  }
}
