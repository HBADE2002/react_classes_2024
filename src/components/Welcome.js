import React, { Component } from 'react'

export default class Welcome extends Component {
  render() { // render method is used to render the JSX to the DOM 
    const {name, heroName} = this.props // Destructuring props in the class component to name and heroName
    // const {state1, state2} = this.state // Destructuring state in the class component to state1 and state2
    return (
      <h1>Welcome to React {name} a.k.a {heroName}</h1>  
    )
  } // return method is used to return the JSX to the render method
}
