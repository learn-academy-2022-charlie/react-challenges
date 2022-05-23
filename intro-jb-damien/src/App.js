import React, {Component} from "react"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Footer from './components/Footer'
import Favorite from "./components/Favorite"

class App extends Component {
  render () {
    return (
      <>
        <Header /> 
        <Profile />
        <Favorite />
        <Footer />
      </>
    )
  }
}
export default App