import React, { useState,useRef, useEffect } from 'react'

function UseRef02() {
    const [value,setValue] =useState(0)
    const count = useRef(10)
    
    // let {current} =count;
    
    useEffect (() =>{
        count.current = count.current +1
       
    })

  return (
    <>
    <button onClick={() =>{setValue(prev => prev +1)}}>+1</button>
    <h1>{value}</h1>
    <button onClick={() =>{setValue(prev => prev -1)}}>-1</button>

    </>
  )
}

export default UseRef02