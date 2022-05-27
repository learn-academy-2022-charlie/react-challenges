import React, { Component } from 'react';

class Food extends Component {
    render() {
        return (
            <>
                <h1>Carlson Steakhouse</h1>
                <h2>Our Menu Items</h2>
                <ul>
                    {this.props.foodItems.map((value, index) => {
                        return (
                            <li>
                                <span style={{marginRight: "10px"}}>{this.props.foodPrices[index]}</span>
                                <button onClick={() => this.props.addItem(value, index)}>{value}</button>        
                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default Food;