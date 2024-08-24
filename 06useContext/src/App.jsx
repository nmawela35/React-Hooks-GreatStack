import { useState } from 'react'
import './App.css'
import Profile from '../components/Profile'
import Footer from '../components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile/>
      <Footer/>
    </>
   
  )
}

export default App
