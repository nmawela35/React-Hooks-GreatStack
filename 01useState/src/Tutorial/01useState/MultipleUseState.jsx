import React, { useState } from 'react'

function MultipleUseState() {
    const [count,setCount] =useState(0)

    const increase = () =>{
        // setCount(count+1)
        setCount(count => count +1)
        setCount(count => count +1)
        setCount(count => count +1)
        setCount(count => count +1)
   
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increase}>Count: {count}</button>
    </div>
  )
}

export default MultipleUseState