import { useState } from 'react'
import './App.css'
import Counter, { NamedExportCounter } from './component/Counter'
import Toggler from './component/Toggler'
import Greetings from './component/Greetings'
import { MultipleGreetings } from './component/Greetings'
import HookPractice from './component/HookPractice'
import UsersPage from './component/UsersPage'
import LoginPage from './component/LoginPage'

function App() {

  return (
    <div className="app">
      <h1>React JS Learning</h1>

      <section className="box">
        <h2>Counter</h2>
        <Counter />
        <NamedExportCounter />
      </section>

      <section className="box">
        <h2>Toggler</h2>
        <Toggler />
      </section>

      <section className="box">
        <h2>Greetings</h2>
        <Greetings name="ATOS" />
        <MultipleGreetings name="ATOS" wishes="New Year" />
      </section>

      <section className="box">
        <h2>Hooks Practice</h2>
        <HookPractice />
      </section>

      <section className="box">
        <h2>CRUD Operations</h2>
        <UsersPage />
      </section>

        <section className="box">
        <h2> Login Screen</h2>
        <LoginPage />
      </section>

    </div>
  )
}
export default App
