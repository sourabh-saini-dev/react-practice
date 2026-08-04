import React ,{useState}from 'react'
import Child from './Child'


const Parent = () => {
    const [ state, setState] = useState(0)
  return (
    <div>
        <Child state={state} setState={setState}/>
      
    </div>
  )
}

export default Parent

