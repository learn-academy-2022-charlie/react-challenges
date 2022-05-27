import React, { Component } from 'react'

class Order extends Component {
  render() {
    return (
    <>
        <ul>
            {this.props.foodList.map(value => {
                 return(
                     <li>
                         <button onClick={ () => this.props.takeorder(value)}>
                             {value}
                         </button>
                     </li>
                 )
            })}
        </ul>
    </>  
    )
  }
}
export default Order