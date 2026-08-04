import React from 'react'

const Child = ({state, setState}) => {
  return (
    <>
    <div>

        <div>Child {state}</div>
      
    </div>
    <button onClick={()=> setState(state+1)}>click</button>
    </>
  )
}

export default Child
