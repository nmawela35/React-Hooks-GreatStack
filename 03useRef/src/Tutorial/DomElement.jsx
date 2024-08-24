import React,{useRef} from 'react'

function DomElement() {

    const inputElement = useRef()

    const btnClicked =() =>{
        console.log(inputElement.current)
        inputElement.current.style.background = "red"
    }


  return (
    <div>
        <input type="text" ref={inputElement} />
        <button onClick={btnClicked}>Display Element</button>
    </div>
  )
}

export default DomElement

