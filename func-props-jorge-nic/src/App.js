import React, { Component } from 'react'
import TacoList from './components/TacoList'

class App extends Component {
  
  constructor (props){
    super (props)
    this.state = {
      tacos: ['Asada $1.99', 'Pollo $1.99', 'Cabeza $1.99', 'Lengua $2.99', 'Carnitas $1.99', 'Al Pastor $2.99'],
      order: []
    }
  }
    takeOrder = (item) => {
      this.setState({order: [...this.state.order, item]})
    } 

  render() {
    
    return (
    <div>
      <h2>
        TACOS
      </h2>
       <TacoList
       tacoMenu = {this.state.tacos}
         takeOrder={this.takeOrder}
       />
       <h2>
         Enjoy your Tacos
       </h2>
        <ul>
          {this.state.order.map((value, index) => {
            return<li key={index}>{value}</li>
          })
          }
        </ul>
    </div>
    )
  }
}

export default App