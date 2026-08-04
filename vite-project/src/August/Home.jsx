import React ,{useEffect,useState}from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  const [ state, setState] = useState([])

   useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then(res=> res.json())
        .then((data)=> setState(data.users))

   },[])
   

    const userFetch=(id)=>{
      navigate(`/user/${id}`)

    }
      
   
  return (
    <div>
       {state.map((val)=>(
         <div key={val.id}  onClick={()=>userFetch(val.id)}>
          <h1>{val.firstName}</h1>
          <h2>{val.email}</h2>
          <h3>{val.password}</h3>
         </div>
       ))}
      
    </div>
  )
}

export default Home
