import React, { Component } from 'react'

class IRobot extends Component {
    render() {
        return(
            <>
            <h3>iRobot</h3>
            <p>{`Did you type: ${this.props.updatedState}?`}</p>
            </>
        )
    }
}

export default IRobot