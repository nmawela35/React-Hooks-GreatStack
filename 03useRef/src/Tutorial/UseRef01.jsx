import React from 'react'
import { useState,useEffect } from 'react'

function UseRef01() {
     //will trigger infinite loop, resolution useRef, next tutorial
  const [value, setValue] = useState(0)
  const [count,setCount] = useState(0)

  useEffect (()=>{
    setCount(count=>count+1)
  })

  return (
    <>
    <button onClick={() =>{setValue((prev) => prev+1)}}>+1</button>
    <h1>{value}</h1>
    <button onClick={() =>{setValue((prev) => prev-1)}}>-1</button>
    <h1>Render Count: {count}</h1>
    </>
    )

}

export default UseRef01