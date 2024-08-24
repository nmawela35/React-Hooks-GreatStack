import React from 'react'
import { useState } from 'react';

function Objects() {
    const [car,setCar] = useState({
        brand:"Ferrri",
        model: "Roma",
        year: '2024',
        color:'red'
      })
    
    const {brand,model,year,color} =car;
    
    const editCar =() =>{
      setCar((car) =>{
        return {...car,color:"blue",model:"Toyota",year:2020}
      })
    }
    
      return (
        <>
          <h1>My {brand}</h1>
          <h2>Its {color} from {model} {year}</h2>
          <button onClick={editCar}>Car</button>
    
        </>
      );
}

export default Objects