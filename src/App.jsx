import { useState } from 'react'
import './App.css'
import './sidebar.jsx'
import Sidebar from './sidebar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div cassName="rtl:mr-0 rtl:ml-auto flex">
      <Sidebar></Sidebar>
    </div>
  )
}

export default App
