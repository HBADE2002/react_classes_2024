import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {

    constructor(props) { // constructor method is called when an object is created from the class and it allows us to initialize the state of the component
        super(props) // super() is used to call the constructor of the parent class and to access the parent's properties and methods
        this.state = {
            parentName: props.myName // parentName is a state variable that stores the value of the myName prop
        }
        this.greetParent= this.greetParent.bind(this) // binding the method greetParent() to the ParentComponent class
    } 
    
    greetParent() { // greetParent() method is used to alert a message when the button is clicked
        alert(`Hello ${this.state.parentName}`) // alert() method is used to display an alert box with a specified message and an OK button
    }
  render() { // render() method is used to display the output on the screen
    return (
        <div>
            <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div> // greetHandler is a prop that is used to pass the greetParent() method as a prop to the ChildComponent component 
    ) 
  }
}

export default ParentComponent