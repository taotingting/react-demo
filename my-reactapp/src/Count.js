import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Count extends Component {
    constructor(props){
        super(props);
        this.incrementIfOdd=this.incrementIfOdd.bind(this);
        this.incrementIfAsync=this.incrementIfAsync.bind(this);
    }
    incrementIfOdd(){
        if(this.props.value %2 !== 0 ){
            this.props.onInCrement()
        }
    }
    incrementIfAsync(e){
        setTimeout(this.props.onInCrement,1000)
    }
  render() {
      const { value, onInCrement, onDecrement } = this.props
    return (
      <div className="App">
        clicked: {value} times
        {' '}
        <button onClick={onInCrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
        {' '}
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        {' '}
        <button onClick={this.incrementIfAsync}>increment id async</button>
      </div>
    );
  }
}
Count.propTypes={
    value: PropTypes.number.isRequired,
    onInCrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}
export default Count;