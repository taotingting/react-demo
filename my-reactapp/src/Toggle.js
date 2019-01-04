import React,{ Component } from 'react';

class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn:true}
        this.handleClick= this.handleClick.bind(this)
    }
    // componentDidMount(){
    //     this.timerid=setInterval(()=> this.tick(),1000)
    // }
    // componentWillUnmount(){
    //     clearInterval(this.timerid)
    // }
    handleClick(){
        this.setState( prevState => ({
                isToggleOn: !prevState.isToggleOn
            })
        )
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON':'OFF'}
            </button>
        )
    }
}

export default Toggle;