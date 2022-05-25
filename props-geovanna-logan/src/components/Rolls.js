import React, { Component } from 'react' 

class Rolls extends Component {
    render() {
        return(
            <>  
                <h2>Roll Log</h2>
                <ol>
                    <li>{this.props.loggedItem[0]}</li>
                    <li>{this.props.loggedItem[1]}</li>
                    <li>{this.props.loggedItem[2]}</li>
                    <li>{this.props.loggedItem[3]}</li>
                    <li>{this.props.loggedItem[4]}</li>
                </ol>
            </>
        )
    }
}

export default Rolls