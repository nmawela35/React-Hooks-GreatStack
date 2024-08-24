import { useState,useReducer } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const initialState = {count: 0}

  const [state,dispatch] =useReducer(reducer,initialState)

  return (
    <>
     <h1>Hello Reducer</h1>
     <h3>{count}</h3>
     <button onClick={() =>{setCount((prev) => prev+1)}}>Increase</button>
     <button onClick={() =>{setCount((prev) => prev-1)}}>Decrease</button>
    </>
  )
}

export default App
