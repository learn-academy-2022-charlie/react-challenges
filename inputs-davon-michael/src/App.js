import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props)
   this.state={
     name:""
   }
  }
 handleChange = (e)=>{
  this.setState({name: e.target.value})
}






  render(){
    return(
      <>
        <h1>Robo Active Listening</h1>
        <input
        type="text"
        onChange={this.handleChange}
        />  
        {console.log(e)}
        {console.log(e.target)}
        {console.log(e.target.value)}
      </>
    )
  }
}

export default App