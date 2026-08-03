import React, { useEffect, useState } from "react";

const A = () => {
    const [show, setShow] = useState(true)

    const submit = ()=>{
          if(show){
            setShow(false)
          }else{
            setShow(true)
          }
    }
 
  return (
    <>
    <button onClick={submit}>{show ? "hide" : "show"}</button>

    
    </>
  );
};

export default A;


// on click par change karna show to hide, hide to show how to work in tha code
