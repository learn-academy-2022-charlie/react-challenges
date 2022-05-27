import React, { Component } from 'react'
import BadRobot from './components/BadRobot'
import OptimusPrime from './components/OptimusPrime'
import R2D2 from './components/R2D2'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      robotString: ""
    }
  }
  
  handleChange = (e) => {
    this.setState({robotString: e.target.value})
    console.log("handle change log", this.state.robotString)
  }

  render() {
    //console.log("the input", this.state.robotString)
    return (
      <>
      <input type= "text" 
      onChange={this.handleChange}
      />
      <div>
      <OptimusPrime 
      robotString={this.state.robotString}
      />
      </div>
      
      <div>
      <BadRobot 
      robotString= {this.state.robotString}
      />
      </div>
      <div>
      <R2D2 
      robotString= {this.state.robotString}
      />
      </div>

      
      
      </>
    )
  }
}


export default App
