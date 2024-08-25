import { useState,useReducer } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const initValue = {count: 0}
  
  const reducer =(state,action) =>{
    if (action.type == "Increment")
      {
      return {count: state.count + action.payload}
    }
    if (action.type == "Decrement")
      {
      return {count: state.count - action.payload}
    }
    if(action.type == "input"){
      return {count: action.payload}
    }
  }

  const [state,dispatch] =useReducer(reducer,initValue)

  return (
    <>
    <h1>useState</h1>
    <h3>{count}</h3>
    <button onClick={() =>setCount((prev) =>prev+1)}>Increase</button>
    <button onClick={() =>setCount((prev) =>prev-1)}>Decrease</button>

    <h1>useReducer</h1>
    <h3>{state.count}</h3>
    <button onClick={() =>dispatch({type:"Increment", payload:2})}>Increase</button>
    <button onClick={() =>dispatch({type:"Decrement", payload:2})}>Decrease</button><br/><br/>
    <input type="number" value={state.count} onChange={(e) =>dispatch({type:'input',payload:Number(e.target.value)})}/> 
    
    </>    
  )
}

export default App
