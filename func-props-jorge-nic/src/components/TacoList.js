import React, { Component } from 'react'

 class TacoList extends Component {
  render() {
    return (
      <div>
          <ul>
          {this.props.tacoMenu.map(value =>{
            return (
             <li>
              <button onClick={() => this.props.takeOrder(value)}>
                  {value}
              </button>  
             </li>   
            )  
          }) 
        }
          </ul>
      </div>
    )
  }
}

export default TacoList