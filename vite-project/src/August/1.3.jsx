import React,{useEffect,useState} from 'react'

const B = () => {
const [state, setState] = useState(0)
const [data, setData] = useState([])
useEffect (()=> {
     fetch("https://dummyjson.com/users")
     .then((res)=> res.json())
     .then((data)=>{
        setData(data.users) 
        })
         .catch(err=>{
            console.log(err);
     })
     
},[])


  return (
   <>
    {data.map((val)=>(
        <div key={val.id}>
            <h1>{val.firstName}</h1>
            <h2>{val.email}</h2>
            <h3>{val.password}</h3>
            <h4>{val.city}</h4>
        </div>
    ))}
   </>
  )
}

export default B
