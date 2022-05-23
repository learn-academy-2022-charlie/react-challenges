import React, { Component } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Favorites from './components/Favorites'
import Footer from './components/Footer'

class App extends Component{
  render(){
    return(
      <>
        <Header />
        <Profile/>
        <Favorites/>
        <Footer/>
      </>
    )
  }
}

export default App
