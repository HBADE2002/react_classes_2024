import React, { Component } from 'react'

class Message extends Component { // This is a class component
    constructor() {   // This is a constructor method that is called when a component is created
        super() // This is a super method that calls the constructor of the parent class
        this.state = { // This is a state object that contains the data that the component needs
            message: 'Welcome visitor'
        }
    }

    changeMessage() { // This is a changeMessage method that is used to change the message
        this.setState({ // This is a setState method that is used to change the state of the component
            message: 'Thank you for subscribing'
        })
    }
    render() {  // This is a render method that returns the JSX
        return (  // This is a return statement that returns the JSX
            <div> 
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )   // This is a closing return statement
    }
}

export default Message