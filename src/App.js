import React, { Component } from 'react'
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import ParentComponent from './components/ParentComponent'
import NameList from './components/NameList'
export default class App extends Component {
  render() {
    return (
      <div className='App'>

        <NameList />
        {/* <ParentComponent myName='Hrishikesh' myAge='21'/> */}
        {/* <FunctionClick />
        <ClassClick /> */}
      {/* <Counter />
      <Greet name="Clark" heroName="Superman"></Greet>
`     <Welcome name="Bruce" heroName="Batman"></Welcome>` */}
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