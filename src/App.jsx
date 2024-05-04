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
        maxWidth:444,
        direction: 'rtl'
      }}>
      <h2>ברוכים הבאים לויקיפדיה של Unity-Algorithm-Game! </h2>
      <div className="card">
        <p>
          בויקיפדיה הזו ניתן לקרוא על האלגוריתמים, מפלצות, וחפצים המופיעים במשחק
        </p>
      </div>
      <Algorithms />
      </div>
      
    </>
  )
}

export default App
