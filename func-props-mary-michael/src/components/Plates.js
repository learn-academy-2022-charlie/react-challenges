import React, { Component } from 'react'

class Plates extends Component{
  render(){
    return(
      <>
        <ul>
            <li>
              {this.props.foodItems}
            </li>
            {/* We tried making a bulleted list of the individual foodItems, but it broke. Right now it shows a single bullet with everything on it. */}
        </ul>
      </>
    )
  }
}

export default Plates
