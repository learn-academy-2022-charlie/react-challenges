import React, { Component } from 'react'

class Plate extends Component{
  render(){
    return(
      <>

        <ul>{this.props.menu.map(value => {
          return ( 
          <li>
            <button onClick={()=> this.props.order(value)}>{value}</button></li>)
        })}
        <li>{this.props.price.map(value => {
              return (
                <li>
              {value}
                </li>)
               
          })}</li>
        </ul>

         <ul>{this.props.price.map(value => {
              return (
                <li>
              {value}
                </li>)

               
          })}
         </ul> 
        </>
    )
  }
}

export default Plate
//onClick={() => this.props.
