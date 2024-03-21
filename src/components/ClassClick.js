import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() { // This method is not bound to the class. So, it will throw an error. 
        // TypeError: Cannot read property 'clickHandler' of undefined
        console.log('Button clicked from Class component')
    }
    render() { // This method is bound to the class. So, it will work. 
    return (
        <div>
            <button onClick={this.clickHandler}>Click Here</button>
      </div>
    )
  }
}

export default ClassClick