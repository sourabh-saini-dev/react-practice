import React from 'react'
  import {useState} from "react"

const Form2 = () => {
 const [user, setUser] = useState([])
    const [form, setForm ] = useState({
        name:"",
        gmail:"",
         password:"",

    })


     const handleChange=(e)=>{
      const  { name, value} = e.target
      setForm({
        ...form,
        [name]: value
      })

     }
     const submit=(e)=>{
      e.preventDefault()
      console.log("form", form)
      setUser([...user,form])
     }
     
  


  return (
   <>

         <fieldset>
          <h4>Registration form</h4>
          <form  onSubmit={submit}>
            <input type="text"
            name="name"
            value={form.name}
            placeholder='enter your name'
             onChange={handleChange} />
             <br /><br />


             <input type="text"
             name="gmail"
             value={form.gmail}
             placeholder='enter your gmail' 
             onChange={handleChange}/>
             <br /><br />

             <input type="text"
             name="password"
             value={form.password}
             placeholder='enter your password'
             onChange={handleChange} />
             <br /><br />


             <button type='submit'>submit</button>

               {user.map((val,index)=>(
                <div key={index}>
                  {val.name}
                  {val.gmail}
                  {val.password}
                </div>

               ))}
             
             



          </form>
         </fieldset>
  
   </>
  )
}

export default Form2
