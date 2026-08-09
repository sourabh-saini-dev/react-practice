import React ,{useState,useEffect} from 'react'

const Test = () => {
    const [ data, setData] = useState([])
    const [show , setShow] = useState(true)


    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then((data)=>{
               setData(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

       console.log(data[0])

       const Submit=()=>{
         setShow(!show)
       }
            localStorage.setItem("users", JSON.stringify(data))



  return (
    <div>
        <button onClick={Submit}>
            {show ? "hide": "show"}
                </button>
            {show &&(
     
         <>
         {data.map((val)=>(
            <div key={val.id}> 
                 <h1>{val.email}</h1> 
                <h1>{data.id} {data.name}</h1>
                <p>{data.username}</p>
             </div>
          ))} 
      
         </>

         )}
    
      
    </div>
  )
}

export default Test
