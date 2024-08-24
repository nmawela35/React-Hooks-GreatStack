import { useState } from 'react'
import { useCallback } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
     const [count,setCount]=useState(0)

     const newFn =useCallback((count)=>{})
    //  const newFn =useCallback((count)=>{},[count])
    //  const newFn =useCallback((count)=>{},[])


  return (
    <>
    <Header newFn={newFn}/>
    <h1>{count}</h1>
    <button onClick={() =>{setCount(prev => prev+1)}}>Click Here</button>
    </>
  )
}

export default App
