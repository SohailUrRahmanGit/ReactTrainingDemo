import { useState } from 'react'
import './App.css'
import Counter, { NamedExportCounter } from './component/Counter'
import Toggler from './component/Toggler'
import Greetings from './component/Greetings'
import { MultipleGreetings } from './component/Greetings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>React JS Learning </h1>
     <Counter />
     <NamedExportCounter />
     <Toggler />
     <Greetings name="Sohail"/>
     <MultipleGreetings name="Sohail" wishes="New year"/>
    </>
  )
}

export default App
