import React,{useState,useEffect} from 'react'



const Merge = () => {
     const [data, setData] = useState({})
     const [ post, setPost] = useState({})
     const [ merge, setMerge] = useState({})
     const [show, setShow] = useState(true)

  
       useEffect(()=>{   
      fetch("https://dummyjson.com/users")
       .then(res=> res.json())
       .then((data)=>{
          setData(data.users[0])
          
       })
       .catch((err)=> {
        console.log(err);
        
       })


       fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res=> res.json())
          .then((data)=>{
            setPost(data[0])

          })
          .catch((err)=>{
            console.log(err)
          })
       },[])


        useEffect(()=>{
             setMerge({
               user: data,
               post:post,
        })
              console.log("merge",merge)
        },[data,post])

  

        const Submit=()=>{
            setShow(!show)
             
        }
  return (
    <>
    <div>
        <button onClick={Submit}>
            {show ? "hide": "show"}
        </button>
        {show &&(
         
          <>
        
       <p>{data.email}</p>
       <h1>{data.firstName} {data.lastName}</h1>
       <h1>{data.gender}</h1>
        {/* 2nd ap  */}


           <h1>{post.id}</h1>
           <h1>{post.title}</h1>
           <p>{post.body}</p>
         

       </>
  )}
    </div>
  
  
    </>
  )
}

export default Merge
