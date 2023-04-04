import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const getmAC=async () => {
  const response = await axios.get('http://localhost:3021/api/data/getmacaddress')
  console.log(response)
}
  return (
    <div className="App">
      <button onClick={getmAC}>gooooo</button>
    </div>
  )
}

export default App
