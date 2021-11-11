import React, { Component } from 'react'
import './Main.css'
import Clock from './Clock'

export class CountDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deadline: "December 25, 2021",
            newDeadline: ""
        }
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            this.changeDeadline()
        } 
    }

    changeDeadline = () => {
        this.setState({
            deadline: this.state.newDeadline
        })
    }

    render() {
        return (
            <div className = "CountDown">
                {/* Countdown title */}
                <div id = "Title">Countdown to {this.state.deadline}</div>
                {/* countdown */}
                <Clock  deadline = {this.state.deadline}/>
                <div className = "Field-style">
                    {/* date input and submit button */}
                    <input
                        className = "Deadline-style"
                        placeholder = "Enter Date"
                        name = "date"
                        id = "date"
                        onChange = {(event) => this.setState({newDeadline: event.target.value})} 
                        onKeyPress = {this.handleKeyPress}
                    />
                    <button className = "Button-style" type = "submit" onClick = {() => this.changeDeadline()}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default CountDown
