import React, { Component } from 'react'



class Profile extends Component{
  // constructor(props){
  //   super(props)
  //   this.myProfile = false
  // }
  // showProfile = () => {
  //   if(myProfile === false){
  //
  //   }else if(myProfile === true){
  //
  //   }
  // }
  render(){
    return(
      <>
      // <button onClick="showProfile()">Click me</button>

        <ul>Stephen OMarrah🧐
          <li>Age: 30</li>
          <li>Hobby: Art 👨🏻‍🎨</li>
          <li>Favorite food: Steak, medium rare 🥩</li>
          </ul>
        <ul>Nic Last 🤣
          <li>Age: 19</li>
          <li>Hobby: Gym 🏋️</li>
          <li>Favorite food: Sushi 🍣</li>
          </ul>
      </>
    )
  }
}

export default Profile
