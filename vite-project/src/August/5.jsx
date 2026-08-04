import React,{useState} from 'react'


const Parent = () => {
    const [state, setState] = useState(0)
  return (
    <div>
        <Child state={state} setState={setState}/>
      
    </div>
  )
}

export default Parent


// child to parent data bhejna  callback function se //
