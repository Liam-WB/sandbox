import { useState } from 'react'
import Logo from './assets/LOGO.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran" target="_blank">
          <img src={Logo} className="logo" alt="Logo" />
        </a>
      </div>
      <h1>This is a WIP!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        © 2025 Team Exodia Project. All Rights Reserved.
        -Contact
        -Legal Links
        -Language Selector
        -Technology used
        -Upcoming Game Teaser
      </p>
    </>
  )
}

export default App
