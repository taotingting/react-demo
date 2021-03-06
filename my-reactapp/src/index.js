import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
//demo
// ReactDOM.render(<App />, document.getElementById('root'));

//test1
// ReactDOM.render(<p>hello react</p>, document.getElementById('root'));

// test2
// const user={
//     firstName:'tao',
//     lastName:'ting'
// }
// function showName(user){
//    return `${user.firstName}·${user.lastName}` 
// }
//  const element=(
//      <h1>hello {showName(user)}!</h1>
//  )
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )
// test3
// const user={
//     firstName:'tao',
//     lastName:'ting'
// }
// function showName(user){
//    return `${user.firstName}·${user.lastName}` 
// }
// function showGreet(user){
//     if(user){
//         return <h1>hi {showName(user)}!</h1>
//     }else{
//         return <h1>hello stranger!</h1>
//     }
// }

// ReactDOM.render(
//     showGreet(user),
//     document.getElementById('root')
// )
// test4
// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(
//       element,
//       document.getElementById('root')
//     );
//   }
  
//   setInterval(tick, 1000);

// test5

// function Welcome(props){
//     return <h1>hi {props.name}</h1>
// }
// class Welcometwo extends React.Component {
//     render(){
//         return <h1>hello {this.props.name}</h1>
//     }
// }
// const element= <div><Welcome name="ttt" /><Welcometwo name="ttt" /></div>

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )

// test6
// function Welcome(props){
//     return <h1>hi {props.name}</h1>
// }
// class Welcometwo extends React.Component {
//     render(){
//         return <h1>hello {this.props.name}</h1>
//     }
// }
// class Namelist extends React.Component {
//     render(){
//         return <div>
//                 <Welcome name="ttt" />
//                 <Welcome name="fff" />
//                 <Welcome name="ddd" />
//                 <Welcometwo name="tdddtt" />
//             </div>
//     }
// }
// const element= <Namelist name="ttt" />

// ReactDOM.render(
//     <Namelist name="ttt" />,
//     document.getElementById('root')
// )

//test7clock
// import Clock from './Clock.js'
// class App extends React.Component{
//     render(){
//        return(
//            <div>
//                <Clock/>
//                <Clock/>
//                <Clock/>
//            </div>
//        ) 
//     }
// }
// ReactDOM.render(
//     <App/>,
//     // <div>1</div>,
//     document.getElementById('root')
// )

// test8 toggle
// import Toggle from './Toggle.js'
// ReactDOM.render(
//     <Toggle/>,
//     document.getElementById('root')
// )


// //test9 login
// import LoginControl from './LoginControl.js'

// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// )

// test10 循环
// const numbers=[1,2,3,4,5]
// const listItems= numbers.map(number=><li>{number}</li>)
// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
// )

// test11 NumberList
// import NumberList from './NumberList.js'
// const numbers=[2,4,6,7]
// ReactDOM.render(
//     <NumberList numbers={numbers}/>,
//     document.getElementById('root')
// )


// // test12 NameForm
// import NameForm from './NameForm.js'
// ReactDOM.render(
//     <NameForm />,
//     document.getElementById('root')
// )


// test13 Calculator
// import Calculator from './Calculator.js'
// ReactDOM.render(
//     <Calculator />,
//     document.getElementById('root')
// )

// test14 组合继承
// function FancyBorder(props){
//     return (
//         <div className={'FancyBorder FancyBorder-'+props.color}>
//             {props.children}
//         </div>
//     )
// }
// function WelcomeDialog(){
//     return (
//         <FancyBorder color="blue">
//             <h1>Welcome</h1>
//             <p>Thank you for visiting our spacecraft!</p>

//         </FancyBorder>
//     )
// }

// function SplitPane(props){
//     return (
//         <div>
//             <div>{props.left}</div>
//             <div>{props.right}</div>
//         </div>
//     )
// }
// function App(){
//     return (
//         <SplitPane left={<Left/>} right={<Right/>}/>
//     )
// }
// function Left(){
//     return (
//         <p>left</p>
//     )
// }
// function Right(){
//     return (
//         <p>right</p>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )
// test15
// import SignupDialog from './SignupDialog.js'
// ReactDOM.render(
//     <SignupDialog/>,
//     document.getElementById('root')
// )
// // test16 redux
// import { createStore } from 'redux'
// import Count from './Count.js'
// import count from './reducers'
// // 安装redux-devtools-extension的可视化工具。
// import { composeWithDevTools } from 'redux-devtools-extension'
// const store = createStore(count,
//     composeWithDevTools(
//     ))

// const render= ()=> ReactDOM.render(
//     <Count 
//         value={store.getState()} 
//         onInCrement={()=>store.dispatch({ type: 'INCREMENT' })} 
//         onDecrement={()=>store.dispatch({ type: 'DECREMENT' })}/>,
//     document.getElementById('root')
// )
// render()
// store.subscribe(render)//这是重点啊  state不然返回不了

// test17 overview
import Overview from './Overview.js'
let name='yyy'
function handleClick(){
    console.log(111)
    name='yyt'
}
ReactDOM.render(
    <div>
        <Overview name={name}/>
        <button onClick={handleClick}>modify props</button>
    </div>,
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
