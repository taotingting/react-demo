import React,{ Component } from 'react'
class UserGreeting extends Component{
    render(){
        return (<h1>welcome back!</h1>)
    }
}
class GeustGreeting extends Component{
    render(){
        return (<h1>please sign in!</h1>)
    }
}
class Greeting extends Component{
    render(){
        const isOnLogin=this.props.isOnLogin
        if(isOnLogin){
            return <UserGreeting/>
        }else{
            return <GeustGreeting/>
        }
    }
    
}
class LoginButton extends Component{
    render(){
        return (<button onClick={this.props.onClick}>login</button>)
    }
}
class LogoutButton extends Component{
    render(){
        return (<button onClick={this.props.onClick}>logout</button>)
    }
}
class LoginControl extends Component{
    constructor(props){
        super(props);
        this.handlerLogin=this.handlerLogin.bind(this);
        this.handlerLogout=this.handlerLogout.bind(this);
        this.state={isOnLogin:false}
    }
    handlerLogin(){
        this.setState(prevState=>({
            isOnLogin:true
        }))
    }
    handlerLogout(){
        this.setState(prevState=>({
            isOnLogin:false
        }))
    }
    render() {
        const isOnLogin=this.state.isOnLogin
        let button=null
        if(!isOnLogin){
            button= <LoginButton onClick={this.handlerLogin}/>
        }else{
            button= <LogoutButton onClick={this.handlerLogout}/>
        }
        return (
            <div>
               <Greeting isOnLogin={isOnLogin}/>
               {button}
            </div>
        )
        
    }
}
export default LoginControl;