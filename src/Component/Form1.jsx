import React from 'react'
import {useState} from "react"

const Form1 = () => {
    const [form, setForm] = useState({
        Name:"",
        Email:"",
        Password:"",


    })

    const handleChange=(e)=>{
        const {name, value} = e.target
        setForm({
            ...form,
            [name]:value
        })
    }
         const Sumbit=(e)=>{
            e.preventDefault()
           
                   localStorage.setItem("users", JSON.stringify(form))
                    console.log(form)

         }


  return (
   <>
     <fieldset>
        <h3>Registration Form</h3>

        <form  onSubmit={Sumbit}>

            <input type="text"
            name="Name"
            value={form.Name}
            placeholder='enter your name'
            onChange={handleChange} 
            />
            <br /><br />

            <input type="text"
            name="Email"
            value={form.Email}
            placeholder='enter your email'
            onChange={handleChange}
             />
             <br /><br />

             <input type="text"
             name="Password"
             value={form.Password}
             placeholder='entery your password'
             onChange={handleChange}
              />
              <br /><br />

              <button type='Submit'>Submit</button>

        </form>
     </fieldset>

         <h2>Form data</h2>
         <h2>Name: {form.Name}</h2>
         <h2>Emali:{form.Email}</h2>
         <h2>Password:{form.Password}</h2>

          
   </>
  )
}

export default Form1



//  for practice normal form withour validation 
