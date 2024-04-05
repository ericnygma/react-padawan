import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center justify-center">
      Hello Eric!
    </h1>
    <h2 className='text-center font-semibold text-lg text-slate-600' >Currency Converter</h2>
    </>
  )
}

export default App
