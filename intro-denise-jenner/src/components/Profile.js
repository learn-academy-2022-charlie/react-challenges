import React,{Component} from 'react'
import Favorite from './Favorite'


class Profile extends Component {
    render(){
        return(
            <>
            <h2>Developers Profile</h2>
            <h3>Denise Carlson</h3>
            <p>
                New React Developer making first application. Lives in Houston, TX
                Enjoys walking and hiking.
            </p>
            <Favorite />
            <h3>Jenner Dulce</h3>
            <p>
            New React Developer making first application. Lives in San Diego, CA
                Enjoys video games and surfing.
            </p>
            <Favorite />
            </>
        )
    }
}
export default Profile