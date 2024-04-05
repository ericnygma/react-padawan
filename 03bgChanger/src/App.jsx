import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  function changeColor(color){
    setColor(color)
  }


  return (
    <>
      <h1 className='bg-green-500'>Bockground Changer with Vite</h1>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
            className='outline-none shadow-lg px-4 py-1 rounded-full text-black'
            onClick={() => changeColor('red')}>Red</button>
            <button
            className='outline-none shadow-lg px-4 py-1 rounded-full text-black'
            onClick={() => setColor('blue')}>Blue</button>
            <button
            className='outline-none shadow-lg px-4 py-1 rounded-full text-black'
            onClick={''}>test3</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
