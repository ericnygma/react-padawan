import Card from './components/Card'

import './App.css'

function App() {
  const joker= "https://queenstudios.shop/cdn/shop/products/QueenStudios1-4Joker_1200x630.jpg?v=1621933002"

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded">
      Hello TailwindCSS!
    </h1>

    <Card title="Dark Knight" post="“Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”"/>

    <Card username='Joker' title="Agent of Chaos" imageUrl="https://queenstudios.shop/cdn/shop/products/QueenStudios1-4Joker_1200x630.jpg?v=1621933002"/>

    <Card username='Eric Nigma'/>
    </>
  )
}

export default App
