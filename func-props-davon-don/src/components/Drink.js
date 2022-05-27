import React, { Component } from 'react'
import './Button.css'

export default class Drink extends Component {
  render() {
    return (
    <>
      <div >
          <h3>Drink Menu</h3>
          <ul className = "list">
            {this.props.drinkMenu.map(value => {
                return (
                    <li>
                        <button onClick={() => this.props.order(value)}>
                            {value[0]}  <p>{value[1].toFixed(2)}</p> 
                        </button>
                                             
                    </li>
                )
            })}

          </ul>
      </div>
    </>
    )
  }
}
