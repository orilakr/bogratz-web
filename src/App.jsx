import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-red-500">Vite + React</h1>
      <button className="btn btn-info">Info</button>
    </>
  )
}

export default App
