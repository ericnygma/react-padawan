import './App.css'
import Card from './components/Card'
import Student from './components/Student'

function App() {
  

  return (
    // add components below
    <>
      <Student name='Spongebob' age={30} isStudent={true}/>
      <Student name='Patrick' age={42} isStudent={false}/>
      <Student name='Squidword' age={50} isStudent={false}/>
      <Student name='Sandy' age={27} isStudent={true}/>
    </>
  )
}

export default App
