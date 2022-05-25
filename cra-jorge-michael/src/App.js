import React, { Component } from 'react'
import Header from './component/Header'
import Profile from './component/Profile'
import Footer from './component/Footer'
import FavoriteList from './component/FavoriteList'

class App extends Component{
  render(){
    return(
      <>
      <Header />
      <Profile />
      <FavoriteList />
      <Footer />
      </>
    )
  }
}

export default App
