import { useState } from 'react'
import './App.css'
import Counter, { NamedExportCounter } from './component/Counter'
import Toggler from './component/Toggler'
import Greetings from './component/Greetings'
import { MultipleGreetings } from './component/Greetings'
import HookPractice from './component/HookPractice'
import UsersPage from './component/UsersPage'
import LoginPage from './component/LoginPage'
import Login from './component/Login'
import SomeInput from './component/SomeInput'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ToDoList from './component/routerExample/ToDoList'
import HomePage from './component/routerExample/HomePage'
import About from './component/routerExample/About'

function App() {

  return (
    <div className="app">
      <h1>React JS Learning & Practice</h1>

      <section className="box">
  <BrowserRouter> <h2> Routing Practice </h2>
      <nav>
        <Link to="/">Home</Link> {" "}{" "}
        <Link to="/todo">To-Do</Link> {" "}{" "}
        <Link to="/about">About</Link>
      </nav>

     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/about" element={<About />} />
      </Routes>
  </BrowserRouter>

      </section>

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

        <section className="box">
        <h2> Login Form with Reusable Form</h2>
        <Login />
      </section>

              <section className="box">
        <h2> Target Component </h2>
        <SomeInput />
      </section>

    </div>
  )
}
export default App
