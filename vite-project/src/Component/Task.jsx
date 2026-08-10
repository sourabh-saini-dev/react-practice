import React,{useState,useEffect} from 'react'
import Home from "./Home"

const Task = () => {
    const [data , setData] = useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then(res=> res.json())
         .then((data)=>{
             setData(data.users)
         })
         .catch((err)=>{
             console.log(err);
             
         })
    },[])
     console.log(data);
     
  return (
    <div>
      <Home data={data}/>
    </div>
  )
}

export default Task
