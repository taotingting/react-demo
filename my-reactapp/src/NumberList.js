import React, { Component } from 'react';
class NumberList extends Component{
    render() {
        const numbers = this.props.numbers
        const listItems= numbers.map(number=><li key={number.toString()}>{number}</li>)
        return (
            <ul>{listItems}</ul>
        )
    }
}

export default NumberList;