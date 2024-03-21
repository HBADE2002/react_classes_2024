import React, { Component } from 'react'

class Counter extends Component {
     
    constructor(props) {
        super(props)  // super is a special keyword in React Component which is used to call the constructor of the parent class and pass the props to the parent class constructor
        this.state = { // state is a special property in React Component
            count: 0
        }
        
    }

    increment() {
        this.setState({ // setState is a special method in React Component
            count: this.state.count + 1 // this.state.count is the current state of count
        },
            () => { console.log('Callback value', this.state.count) } // callback function is used to execute the code after the state has been updated 
        )

        console.log(this.state.count)
    }

  render() {
    return (
        <div>
            <div>
                Count :- {this.state.count} 
            </div>
            <button onClick={() => this.increment()}>Increment</button>
        </div>
    )
  }
}

export default Counter