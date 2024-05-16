import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1)
  }

  const removeValue = () => {
    // counter = counter - 1;
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Chai aur React | Hooks</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick = {removeValue}>Remove value</button>              
    </>
  )
}

export default App

/*
Why we need Hooks?
React's major power is UI updation, react controls complex frontends where multiple things are changed by
just one click, it reacts to variable updation.
When we need to make updates in UI, React hooks are used
 */