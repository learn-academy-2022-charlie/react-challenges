import React, { Component } from 'react'

export default class RollRecord extends Component {
  render() {
    return (
        <>
         <div>RollRecord</div>
         <table>
             {this.props.rollRecord}
         </table>
        </>
     
    )
  }
}
