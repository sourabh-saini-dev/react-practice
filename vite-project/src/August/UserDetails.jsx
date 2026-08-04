import React, {useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
            
const UseDetails = () => {
    const {id}  = useParams()
       console.log(id)
       const [state, setState] = useState({})

    useEffect(()=>{
         fetch(`https://dummyjson.com/users/${id}`)
          .then(res=> res.json())
          .then((data)=> setState(data))
           .catch((err)=> {
             console.log(err);
             
           })
    },[id])
     
    
  return (
    <div>
        <p>{state.firstName}</p>
        <p>{state.email}</p>
        <p>{state.role}</p>
        <p>{state.password}</p>
    </div>
  )
}

export default UseDetails
