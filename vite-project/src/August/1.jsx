import React, { useEffect, useState } from "react";

const Practice = () => {
  const [state, setState] = useState(0);
  // const [state, setState] = useState(0)

  //  const [state, setState] = useState(0)

  useEffect(() => {
    console.log("useeffect");
    const timer = setInterval(() => {
      console.log("loading page");

      return () => clearInterval(timer)
    },2000)
  },[])

  return (
    <>
      <button onClick={() => setState(state + 1)}></button>
      {state}
    </>
  );
};

export default Practice;

   // useeEffect use by setInterval funciton how to work useEFFect in  setInterval code 
