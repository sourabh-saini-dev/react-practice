import React from 'react'
import { useLocation } from 'react-router-dom'

const Success = () => {

    let location = useLocation()
     console.log(location.state);
     
  return (
    <div>
        <h1>{location.state.name}</h1>
        <h2>{location.state.email}</h2>
      
    </div>
  )
}

export default Success
