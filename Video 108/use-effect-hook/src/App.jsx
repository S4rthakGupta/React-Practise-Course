import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar.jsx'
import viteLogo from '/vite.svg'
import './App.css'

// code -r (foldername) for example use-effect-hook to open directly from vs code terminal.

// npm create vite@latest, then write project name as (.) then the files will be downloaded in the folder.
// package name  - and then use arrow keys to choose the vite language.

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

  // Snippet for useEffect
  // useEffect(() => {

  // }, [])


// Run on every render.
  useEffect(() => {
    alert("Welcome to my page!")
  })

  // useEffect(() => {
  //   alert("Count was changed!")
  // }, [count])
  

  // useEffect(() => {
  //   alert("Count was changed")
  //   setColor(color + 1)
  // }, [count])




  return (
    <>
    <Navbar color={"cyan"}/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
