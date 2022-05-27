import React, {Component} from 'react'

class Favorite extends Component {
  render(){
    return(
      <>
        <h2>Top 5 Favorite TV Shows </h2>
          <ul>
            <li>Learn Academy Lecture Videos</li>
            <li>Better Call Saul</li>
            <li>Breaking Bad</li>
            <li>Stargate SG-1</li>
            <li>Walking Dead</li>
          </ul>
          <h2>Top 5 Favorite Food </h2>
            <ul>
              <li>Indian</li>
              <li>Mexican</li>
              <li>Korean BBQ</li>
              <li>Cheese Cake</li>
              <li>Flan</li>
            </ul>
          <h2>Top 5 Favorite Hobbies </h2>
            <ul>
              <li>Watching Learn Academy Videos</li>
              <li>Games</li>
              <li>Concerts</li>
              <li>Sewing</li>
              <li>Music</li>
            </ul>
      </>
    )
  }
}
export default Favorite
