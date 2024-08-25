import React from 'react'
import './App.css'
import useLocalStorage from './hooks/useLocalStorage'


function App() {
  const[name,setName] = useLocalStorage('username','')
  const[id,setId] = useLocalStorage('userid','')


  return (
    <>
    <input type="text" placeholder='Enter your name' value={name} onChange={(e) =>setName(e.target.value)}/>
    <h2>Hello!, {name}</h2>
     
    <input type="text" placeholder='Enter your ID' value={id} onChange={(e) =>setId(e.target.value)}/>
    <h2>Your Id: {id}</h2>
     
    </>
  )
}

export default App
