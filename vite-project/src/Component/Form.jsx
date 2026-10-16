import React from 'react'
import {useState} from  "react"
import "../App.css";



const Form = () => {
      
        const [form, setForm ] = useState({
          name:"",
          email:"",
          password:"",
        })

        function handleChange(e){
             const {name,value} = e.target

             setForm({
              ...form,
              [name]:value
             })

        }

           function handleSubmit(e){
             e.preventDefault()
             console.log("submit clicked")
             console.log("formdata",form)
           }


         

   

        


  return (

  <>
  
  <fieldset id='field'>
    <h3>Registration Form</h3>
     
    <form onChange={handleSubmit} >
        
          <br /><br />


            <input id="input" 
            type="name" 
            name="name"
            placeholder='enter your name'
            value={form.name}
            onChange={handleChange} />
            <br /><br />



            <input  id="input"
             type="text"
            name="email"
            value={form.email}
            placeholder='enter your email'
            onChange={handleChange}

             />
             <br /><br />

             <input  id="input"
             type="text"
             name="password"
             value={form.password}
             placeholder='enter your password'
             onChange={handleChange} />
             <br /><br />

             <button id="submit"
              type="Submit">Submit</button>

        
    </form>
  </fieldset>
 
  
  </>
  )
}

export default Form
