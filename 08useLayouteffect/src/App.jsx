
import './App.css'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'

function App() {

  useEffect(() =>{
    console.log("useEffect")
  },[])

  useLayoutEffect(() =>{
    console.log("useLayoutEffect")
  },[])

  return (
    <>
    <h2>Test Message</h2>
    {Array(40000).fill('').map((item,index) =>(
      <li key={index}>{Math.pow(Math.random(), 10)}</li>
    ))}
    
    </>
  )
}

export default App
