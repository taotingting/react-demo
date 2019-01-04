import React, { Component } from 'react';
class NameForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeSex = this.handleChangeSex.bind(this);
        this.state={name:'',age:'',sex:'',isGoing:true}
    }
    handleSubmit(e){
         alert(this.state.name +'is' + this.state.age + this.state.sex +this.state.isGoing)
         e.preventDefault();
         
    }
    handleChange(e){
        // this.setState({
        //     name:e.target.value
        // })
        // this.setState({name: e.target.value.toUpperCase()});
        const target=e.target
        const value = target.type==="checkbox" ? target.checked:target.value
        const name = target.name
        this.setState({
            [name]:value
        })
    }
    handleChangeAge(e){
        this.setState({age: e.target.value});
    }
    handleChangeSex(e){
        this.setState({sex: e.target.value});
    }
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label>
                    Name:
                    <input name='name' type='test' value={this.state.name} onChange={this.handleChange}/>
                    Age:
                    <textarea name='age' value={this.state.age} onChange={this.handleChange}/>
                    Sex:
                    <select name='sex' value={this.state.sex} onChange={this.handleChange}>
                        <option value="male">male</option>
                        <option value="famale">famale</option>
                    </select>
                    isGoing:
                    <input name='isGoing' type='checkbox' checked={this.state.isGoing} onChange={this.handleChange}/>
                </label>
                <input type='submit' value='submit'/>
            </form>
        )

    }
}

export default NameForm;