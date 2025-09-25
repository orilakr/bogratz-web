import { useState } from 'react'
import './App.css'
import './sidebar.jsx'
import Sidebar from './sidebar.jsx'
import Tabs from './tabs.jsx'

function App() {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <div className="rtl:mr-0 rtl:ml-auto flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default App
