import React from 'react'
import {useState} from  "react"
import "../App.css";



const Form = () => {
  const [user, setUser] = useState([])

  const [form, setForm] = useState({
      name:"",
      email:"",
      state:"",
      password:"",

  })

       const handleChange=(e)=>{
        const {name, value} = e.target
         setForm({
            ...form,
            [name]:value 
         })
       

      }
      const Submit=(e)=>{
        e.preventDefault()

        
        console.log(form)
      
      
      }
      
      
      
  return (

  <>

  <h1>Registration Form</h1>
      <fieldset>
        <form  onSubmit={Submit}>
          <input type="text"
            name= "name"
            value={form.name}
            placeholder='enter your name'
            onChange={handleChange}
          
            />
            <br /><br />


            <input type="text"
              name="email"
              value={form.email}
              placeholder='enter your email'
              onChange={handleChange}
               />
               <br /><br />


               <select 
               name="state"
               value={form.state}
               onChange={handleChange}
               >

                <option value="">Choose your state</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Jammu kashmir">jammu kashmir</option>
               </select>
               <br /><br />


               <input type="text"
               name="password"
               value={form.password}
               placeholder='enter your password'
               onChange={handleChange} />
               <br /><br />


            <button type='Submit'>Submit</button>


        </form>
      </fieldset>



           {user.map((val,index)=>(
            <div key={index}>
              {index.name}
              {index.email}
              {index.state}
              {index.state}
            </div>

           ))}


             </>


  )
}

export default Form
