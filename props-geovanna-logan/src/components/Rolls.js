import React, { Component } from 'react' 

class Rolls extends Component {
    render() {
        return(
            <>  
                <h2>Rolls</h2>
                <ol>
                    <li>{`${this.props.loggedItem}`}</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
                {/* Log rolls */}
                {/* Create an empty array called rollLog */}
                {/* Push the outcome into the array */}
                {/* Display the array in a ordered list */}
            </>
        )
    }
}

export default Rolls