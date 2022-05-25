import React, {Component} from 'react'
import Roller from './components/Roller';


import './App.css';
import Dicebox from './components/Dicebox';


 class App extends Component {
   constructor(props){
     super(props)
     this.state = {
       
       diceRoll: 1, 
       prevRollArr: []
     }
   }
  handleClick = () => {
    this.state.prevRollArr.push(<tr>{this.state.diceRoll}</tr>)
    console.log(this.state.prevRollArr)
    this.setState(
      { 
        diceRoll: Math.floor(Math.random() * 6 + 1),
        prevRollArr: this.state.prevRollArr
      }
      
    )
    

  }
  render() {
    return (
      <>
      <div className= "container">
        <div>
        <table>
          <th>
            <h1>ROOOOLLLL MEEEEE</h1>
        <Roller 
        rolling={this.state.diceRoll}
        rollClick={this.handleClick} />
        </th>
        </table>
        </div>


        <div>
        <table>
        <th>
        <Dicebox
        rollArray = {this.state.prevRollArr}
        
        />
        </th>
        </table>
        </div>
        </div>
      </>
    )
  }
  
}

export default App
