import React, { Component } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Favorites from './components/Favorites'
class App extends Component {
  render(){
    return(
      <>
      <Header/>
      <Profile/>
      <Footer/>
      <Favorites/>
    </> 
    )
  }
}
export default App