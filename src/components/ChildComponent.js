import React from 'react'

function ChildComponent(props) { // ChildComponent is a functional component that takes props as a parameter
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button> 
    </div> // button element is used to create a clickable button that triggers an event when clicked and the onClick event is used to call the greetHandler() method when the button is clicked 
  )
}

export default ChildComponent
