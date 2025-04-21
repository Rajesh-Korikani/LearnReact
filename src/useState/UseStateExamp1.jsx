import React from 'react'
import { useState } from 'react';
const UseStateExamp1 = () => {
    const [count,setCount]=useState(0);
    if(count ==-1){
        return (    <div>
            <button onClick={()=>setCount(count-1)}>Decrement </button> {count} <button onClick={()=>setCount(count+1)}> Increment</button>
             <h1>You are entered to negative state</h1>
          </div>)
    }
  return (
    <div>
      <button onClick={()=>setCount(count-1)}>Decrement </button> {count} <button onClick={()=>setCount(count+1)}> Increment</button>
      {count ==0 && <h1>You are at intial state</h1>}
    </div>
  )
}

export default UseStateExamp1
