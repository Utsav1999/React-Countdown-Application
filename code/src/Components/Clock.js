import React, { Component } from 'react'
import './Main.css'

export class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        //console.log("Inside Component Will Mount")
        this.calculateTime(this.props.deadline)        
    }

    calculateTime = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date())
        //console.log(time);
        const seconds = Math.floor((time / 1000) % 60)
        const minutes = Math.floor((time / (1000 * 60)) % 60)
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
        const days = Math.floor(time / (1000 * 60 * 60 * 24))

        // updating the state
        this.setState({
            days,
            hours,
            minutes,
            seconds
        })
    }

    leadingZero(num) {
        return num < 10 ? "0" + num : num;
    }

    componentDidMount() {
        //console.log("Inside Component Did Mount")

        this.interval = setInterval(() => {
            this.calculateTime(this.props.deadline)
        }, 1000)
    }

    componentWillUnmount() {
        //console.log("Inside Component Will Unmount")
        clearInterval(this.interval)
    }

    render() {
        //console.log("Inside Render")
        return (
            <div>
                <div className = "Clock-days">{this.leadingZero(this.state.days)} days</div>
                <div className = "Clock-hours">{this.leadingZero(this.state.hours)} hours</div>
                <div className = "Clock-minutes">{this.leadingZero(this.state.minutes)} minutess</div>
                <div className = "Clock-seconds">{this.leadingZero(this.state.seconds)} seconds</div>
            </div>
        )
    }
}

export default Clock
