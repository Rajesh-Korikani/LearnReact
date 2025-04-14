import React from 'react'

const PropsExample1 = (props) => {
    const {name,Age,Languages,skills,children,onClick}=props
  return (
    <div>
        <h1>{children}</h1>
      <h2>Name : {name}</h2>
      <h2>Age : {Age}</h2>
      <h2>Languages Known : {Languages[0]},{Languages[1]},{Languages[2]}</h2>
      <h2>Martial Status : {skills.martial_status}</h2>
      <h2>Role : {skills.role}</h2>
      <button onClick={onClick}>Click Here</button>
    </div>
  )
}

export default PropsExample1
