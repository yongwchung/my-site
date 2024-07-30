import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Home></Home>
    </div>
  )
}

export default App
