import React ,{useEffect, useState}from 'react'

const Home = ({data}) => {
    const [data1, setData1] = useState([])
    const [ merge, setMerge] = useState([])
    const [show , setShow] = useState(true)

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
           .then(res=> res.json())
           .then((data)=>{
            setData1(data.products)
           })
           .catch((err)=>{
             console.log(err);
             
           })
            
        },[])


        useEffect(()=>{
            setMerge([...data, ...data1])
        },[data,data1])
          console.log("data",data1)
            console.log("data1",data1)
            console.log("merge",merge)

         

             const Submit=()=>{
                setShow(!show)
             }

  return (
    <div>
        <button onClick={Submit}>
            {show ? "hide": "show"}
        </button>

        {show && (
        <>
        {merge.map((val)=>(
            <div key={val.id}>
                {val.firstName || val.title}
            </div>
        ))}
        </>
     )}

       
      
    </div>
  )
}

export default Home


// api fetch ki fir data ko propse se child component me data pass kia fir child me api fetch ki uske data ko or parent ke data ko merge karke ek he ui me show karna hai //
