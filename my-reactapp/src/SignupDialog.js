import React,{ Component } from 'react';
function FancyBorder(props){
    return (
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    )
}
function Dialog(props){
    return (
        <FancyBorder>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            {props.children}
        </FancyBorder>
    )
}

class SignupDialog extends Component{
    constructor(props){
        super(props);
        this.state = {login:''}
        this.handleClick= this.handleClick.bind(this)
        this.handleInput= this.handleInput.bind(this)
    }
    handleInput(e){
        this.setState({
            login: e.target.value
        })
    }
    handleClick(){
 
        alert(`Welcome aboard, ${this.state.login}!`);
    }
    render() {
        return (
            <Dialog title="Mars Exploration Program" message="How should we refer to you?">
                <input value={this.state.login} onChange={this.handleInput}/>
                <button onClick={this.handleClick}>Sign Me Up!</button>
            </Dialog>
        )
    }
}

export default SignupDialog;