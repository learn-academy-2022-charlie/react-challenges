import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot from './components/KanyeBot'
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: ""


    }
  }
  handleChange = (e) => {

    this.setState({userInput: e.target.value})
  }
  render() {
    return (
      <>
      <div className = "container">
        <h1>ROBO ACTIVE LISTENING</h1>
        
        <input 
          className = "input"
          type="text"
          // value={this.state.userInput}
          onChange={this.handleChange}
        />

        <div className="bots">

        
            <div>
              <h3 id="nice">Good Robot</h3>
              <GoodRobot userText={this.state.userInput}/>
            </div>

            <div>
              <h3 id="stup">Bad Robot</h3>
              <BadRobot userText={this.state.userInput}/>
            </div>

            <div>
              <h3 id="crazy">Kanyebot BrokeBot</h3>
              <KanyeBot userText={this.state.userInput}/>
            </div>

        </div>
<footer> Coded by Don| Ivan| <a href="https://github.com/Geovannapg12"> Geovanna </a> </footer>
      </div>
      </>
    )
  }
}
