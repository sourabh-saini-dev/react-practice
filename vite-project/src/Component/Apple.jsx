import React,{useState, useEffect} from 'react'

const Apple = () => {
    const [data, setData] = useState([])
    const[post, setPost] = useState([])
    const [merge, setMerge] = useState({})
    const [show, setShow] = useState(true)

    useEffect(()=> {
        fetch("https://dummyjson.com/users")
        .then(res=> res.json())
        .then((data)=>{
            setData(data.users)
            
        })
        .catch((err)=>{
            console.log(err);
           
            
        })


          fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=> res.json())
      .then((data)=>{
          setPost(data)
      })
      .catch((err)=>{
        console.log(err)
      })

    },[])



          useEffect (()=>{
         setMerge({

            data: data,
            post:post,
      
          })

        //  console.log( "merge",[...data,...post])
        console.log( "Merge",merge)
   
      },[data,post])

    
    

    
   const Submit =()=>{
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
        {data.map((val)=>(
            <div key={val.id}>
                <p>{val.email}</p>
                <h1>{val.firstName} {val.lastName}</h1>
                <h1>{val.country}</h1>
            </div>
        ))}


                 <br /><br />
                 {post.map((val)=> (
                    <div key={val.id}>
                        <p>{val.id}</p>
                        <h1>{val.name}</h1>
                           <h1>{val.username}</h1>
                           <h1>{val.address.city}</h1>

                    </div>
                 ))}
        </>
        ) }
       
       
      
    </div>
  
    </>
  )
}

export default Apple

  //  2 api ko merge karna fir unse data render karke show hide button lgana  or data ko array ya obj me convert karna //

