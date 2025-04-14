import React from 'react'
import PropsExample1 from './PropsExample1'
const PropsMain = () => {
    const lang=['telugu', 'English', 'Hindi']
    const skills={
        martial_status : "Unmarried",
        role : "Front-end Developer"
    }
    const sayHello = () => {
        alert('Hello from Rajesh!');
      };
    
  return (
    <div>
      <PropsExample1 name="Rajesh" Age={22} Languages={lang} skills={skills} onClick={sayHello}>This is a basic Details</PropsExample1>
    </div>
  )
}

export default PropsMain
