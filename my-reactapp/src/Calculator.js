import React, { Component } from 'react';

// 1
// function BoilingVerdict(props){
//     if(props.celsis>100){
//         return <p>水会烧开</p>
//     }else{
//         return <p>水不会烧开</p>
//     }
// }
// class Calculator extends Component{
//     constructor(props){
//         super(props);
//         this.state={temperature:''}
//         this.handleChange=this.handleChange.bind(this)

//     }
//     handleChange(e){
//         this.setState({
//             temperature: e.target.value
//         })
//     }
//     render() {
//         const temperature = this.state.temperature;
//         return (
//             <fieldset>
//                 <legend>请输入一个摄氏温度</legend>
//                 <input value={temperature} onChange={this.handleChange}/>
//                 <BoilingVerdict celsis={parseFloat(temperature)}/>
//             </fieldset>
//         )
//     }
// }

// export default Calculator;
// 2
const scaleName={
    c:'Celsius/摄氏温度',
    f:'Fahrenheit/华氏温度'
}
class TemperatureInput extends Component{
    constructor(props){
        super(props);
        // this.state={temperature:''}
        this.handleChange=this.handleChange.bind(this)

    }
    handleChange(e){
        // this.setState({
        //     temperature: e.target.value
        // })
        this.props.onTemperatureChange(e.target.value)
    }
    render(){
        const scale = this.props.scale
        const temperature = this.props.temperature
        return (
            <fieldset>
                <legend>请输入一个{scaleName[scale]}温度</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}
function BoilingVerdict(props){
    if(props.celsis>100){
        return <p>水会烧开</p>
    }else{
        return <p>水不会烧开</p>
    }
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
class Calculator extends Component{
    constructor(props){
        super(props);
        this.state={scale:"",temperature:''}
        this.handleCelsiusChange=this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this)

    }
    handleCelsiusChange(e){
        this.setState({
            scale:'c',
            temperature :e.target.value
        })
    }
    handleFahrenheitChange(e){
        this.setState({
            scale:'f',
            temperature :e.target.value
        })
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale==='c' ? tryConvert(temperature,toFahrenheit):temperature
        const fahrenheit = scale==='f' ? tryConvert(temperature,toCelsius):temperature
        return (
          <div>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
            <BoilingVerdict
          celsius={parseFloat(celsius)} />
          </div>
        );
      }
}

export default Calculator;