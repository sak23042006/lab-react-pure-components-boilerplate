import React, { Component } from 'react'

export default class SimpleCounterComponent extends Component {

    constructor(){
        super()
        this.state={
            count:0,
            toggle:true
        }
    }

    changeToggle=()=>{
        this.setState(({
            toggle: !this.state.toggle 
        }))
    }

    increaseCount=()=>{
        if(this.state.toggle){
            this.setState({
                count:this.state.count+1
            })
        }else{
            this.setState({
                count:this.state.count
            }) 
        }
    }

    render() {
        console.log("This is Simple Component");
        return (
            <div>
                <h1>Simple Component</h1>
                <h3>{this.state.count}</h3>
                <button style={{backgroundColor:`${this.state.toggle?"green":"red"}`}} onClick={this.changeToggle} >Toggle</button>
                <button onClick={this.increaseCount} >+</button>
            </div>
            )
        }
    }