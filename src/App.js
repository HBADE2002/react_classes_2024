import React, { Component } from 'react'
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
      <Counter />


      {/* <Message></Message> */}

      {/* <Welcome />
        <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
        <Greet name="Clark" heroName="Superman">
        <button>Action</button>
        </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/> */}
      </div>
    
    )
  }
}