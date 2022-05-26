import React, { Component } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Footer from './components/Footer'
import FavList from './components/FavList'

class App extends Component{
  render(){
    return(
      <>
        <Header />
        <Profile />
        <FavList/>
        <br />
        <Footer />
      </>
    )
  }
}

export default App
