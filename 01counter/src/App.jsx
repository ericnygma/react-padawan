import { useState } from 'react'
// This lesson is about using state in React
// State is a way to store data in a component
// useState is a hook that allows us to use state in a functional component
// useState returns an array with two elements
// The first element is the state variable
// The second element is a function that allows us to update the state variable
// We can use array destructuring to assign names to these elements
// We can then use the state variable and the function to update the state variable
// We can use the state variable in our JSX

import './App.css'

function App() {
  
  const [counter, setCounter] = useState(13)
  // let counter = 15

  const addOne = () => {
    setCounter(counter + 1) 
    console.log(counter)
    
  }
  
  const minusTwo = () => {
    setCounter(counter - 2)
    console.log(counter)
  }
  const sum = () => {
    setCounter(counter + 2)
    setCounter((c) => c + 1)
    console.log(counter)
  }

  return (
    <>
     <h1>React Training {counter}</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addOne}>Add</button>
     <button onClick={minusTwo}>Subtract</button>
     <button onClick={sum}>Sum</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
