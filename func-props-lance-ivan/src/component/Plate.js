import React, { Component } from 'react'

class Plate extends Component {
  render() {
    return (
      <ul>
        {this.props.itemOrdered.map(value => {
            return(
                <li>
                    <button onClick={ () => this.props.foodItems(value)}>
                        {value}
                       </button> 
                       <br/>
                       {this.props.itemPrice.map(value => {
                         return value
                       })}
                  

                </li>
            )
        })}


      </ul>
    )
  }
}


export default Plate