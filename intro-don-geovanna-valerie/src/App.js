import React, { Component } from 'react'
import Header from './Component/Header'
import Profile from './Component/Profile'
import Footer from './Component/Footer'
import Favorite from './Component/Favorite'

class App extends Component {
  render(){
    return(
      <>
      <Header/>
      <Profile/>
      <Footer/>
      <Favorite/>
      </>
    )
  }
}
export default App
