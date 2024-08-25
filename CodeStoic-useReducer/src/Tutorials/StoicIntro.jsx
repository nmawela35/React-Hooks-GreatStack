import React from "react";
import { useReducer } from "react";
import { useState } from "react";

function StoicIntro() {
  const [count, setCount] = useState(0);
    const [state,dispatch] = useReducer(reducer,0)

    //Changes State value
    function reducer(state,action){
        if (action.type == "increment"){
            return state + action.payload
        }
        if (action.type == "decrement"){
            return state - action.payload
        }
    }

  return (
    <>
     <button onClick={() =>{setCount((count) => count+1)}}>Increase</button>
     <button onClick={() =>{setCount((count) => count-1)}}>Decrease</button> 
     <h4>useState: {count}</h4>
     <h4>useReducer: {state}</h4>

    <button onClick={() =>dispatch({type:"increment",payload:2})}>Increment +2</button>
    <button onClick={() =>dispatch({type:"decrement",payload:2})}>Decrement -2</button>
    </>
  )
}

export default StoicIntro;
