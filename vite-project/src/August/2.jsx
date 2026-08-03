import React, { useState, useEffect } from "react";
import axios from "axios";

const A = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reloading, setReloading] = useState(false)


  useEffect(() => {
    async function fetchData() {
   
      const result = await axios.get("https://dummyjson.com/users");
      const data = result.data;
      setState(data.users);
      setLoading(false)
      
        }
    
    
    fetchData();
    
  }, [reloading]);


  if (loading) {
    return <h1>loading...</h1>;
  }

   const Reloading=()=>{
    setLoading(true)

    setTimeout(()=>{
        setReloading(prev=> !prev)
    },3000)

   }

  return (
    <>
     <button onClick={Reloading} className="text-2xl">Reloading</button>
      {state.map((val) => (
        <div key={val.id}>
          <h1>{val.email}</h1>
          <h2>{val.password}</h2>
        </div>
      ))}
    </>
  );
};

export default A;
