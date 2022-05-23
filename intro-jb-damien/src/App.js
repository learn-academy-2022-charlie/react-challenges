import React, {Component} from "react"
import Header from "./components/Header"
import Profile from "./components/Profile"
class App extends Component {
  render () {
    return (
      <>
        <Header /> 
        <Profile />
      </>
    )
  }
}
export default App