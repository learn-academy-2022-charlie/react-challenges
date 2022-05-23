import React, {Component} from "react"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Footer from './components/Footer'
import List from "./components/List"

class App extends Component {
  render () {
    return (
      <>
        <Header /> 
        <Profile />
        <List />
        <Footer />
      </>
    )
  }
}
export default App