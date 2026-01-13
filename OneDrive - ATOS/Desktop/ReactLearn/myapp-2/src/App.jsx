import { useState } from 'react'
import './App.css'
import Counter, { NamedExportCounter } from './component/Counter'
import Toggler from './component/Toggler'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Vite + React </h1>
     <Counter />
     <NamedExportCounter />
     <Toggler />
    </>
  )
}

export default App
