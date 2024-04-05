import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  function changeColor(color){
    setColor(color)
  }


  return (
    <>
      <h1 className='bg-gradient-to-br from-yellow-400 to-purple-600 font-bold text-center text-xl'>Bockground Changer with Vite & Tailwind</h1>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
            className='outline-none shadow-lg px-4 py-1 rounded-full text-white bg-red-600'
            onClick={() => changeColor('red')}>Red</button>
            <button
            className='outline-none shadow-lg px-4 py-1 rounded-full text-white bg-blue-700'
            onClick={() => setColor('blue')}>Blue</button>
            <button
            className='outline-none shadow-lg px-4 py-1 rounded-full text-white bg-orange-500'
            onClick={() => setColor('orange')}>Orange</button>
            <input type="color" 
            className='outline-none shadow-lg px-4 py-2 rounded-full bg-gradient-to-br from-yellow-400 to-purple-500' 
            onChange={(e) => setColor(e.target.value)}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
