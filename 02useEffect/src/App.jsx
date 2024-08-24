import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    setTimeout(() =>{
      setCount(count=>count+1)
    },2000)
  },[])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() =>{setCount((prev) => prev+1)}}>Increase</button>
    </>
  )
}

export default App
