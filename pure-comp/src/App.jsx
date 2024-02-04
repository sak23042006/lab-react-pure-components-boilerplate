import React, { PureComponent } from 'react'
import './App.css'
// import Concept from './concept/Concept'
import SimpleCounterComponent from './concept/SimpleCounterComponent'
import PureCounterComponent from './concept/PureCounterComponent'

function App() {

  return (
    <>
      <div>
        <SimpleCounterComponent/>
        <PureCounterComponent/>
      </div>
    </>
  )
}

export default App