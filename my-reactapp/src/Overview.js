import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Overview extends Component {
    constructor(props){
        console.log('constructor')
        super(props);
        this.state={name:'ttt'}
        this.handleModify=this.handleModify.bind(this);
        // this.incrementIfAsync=this.incrementIfAsync.bind(this);
    }
    // incrementIfOdd(){
    //     if(this.props.value %2 !== 0 ){
    //         this.props.onInCrement()
    //     }
    // }
    // incrementIfAsync(e){
    //     setTimeout(this.props.onInCrement,1000)
    // }
    handleModify(){
        this.setState({
            name:'tyy'
        })
    }
    // getInitialState(){
    //     return {
    //         name: 'ttt'
    //     }
    // }
    // getInitialState () {
    //     return {liked: false};
    //   }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render() {
        console.log('render')
        return (
        <div className="App">
            <h1>hello state:   { this.state.name}</h1>
            <h1>hello props:   { this.props.name}</h1>
            <button onClick={this.handleModify}>modify</button>
        </div>
        );
    }
}
Overview.propTypes={
    // value: PropTypes.number.isRequired,
    // onInCrement: PropTypes.func.isRequired,
    // onDecrement: PropTypes.func.isRequired
}
export default Overview;