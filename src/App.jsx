import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Algorithms from './Algorithms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{
        border: "solid #1E90FF 2px",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        maxWidth:444
      }}>
      <h2>Welcome to the Unity-Algorithm-Game wiki!</h2>
      <div className="card">
        <p>
          In this wikipedia of the Computer Science project you can read about the Algorithms, Monsters, and Items 
          that are featured in the game.
        </p>
      </div>
      <Algorithms />
      </div>
      
    </>
  )
}

export default App
