import React,{ Component } from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()}
    }
    componentDidMount(){
        this.timerid=setInterval(()=> this.tick(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerid)
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div>
                <h1>hello clock</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;