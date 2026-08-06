import React ,{useState}from 'react'




const SignUp = () => {
    const [ name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    const [Aadhaar, setAadhaar] = useState("")
    const [pincode , setPinCode] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [range, setRange] = useState(0)
    const [dob, setDOB] = useState("")
    const [state, setState] = useState("") 
    const [skills, setSkills] = useState("")
    const [file, setFile] = useState("")
    const [bio, setBio] = useState("")
     

    const  Submit=(e)=>{
        e.preventDefault()

      
    }
    


    let data={
        name, lastname, email, password , Aadhaar, pincode,address,phone,range,dob,state, skills, file,bio
    }
     console.log(data);
     

  
  return (
   <fieldset>
    <form  onSubmit={Submit}>
         <label htmlFor="">Name:</label>
         <input type="text" name='name' placeholder='enter your name' onChange={(e)=> setName(e.target.value)} />
         <br /><br />

         <label htmlFor="">LastName</label>
         <input type="text" name="last name" placeholder='enter your last name' onChange={(e)=> setLastName(e.target.value)} />
         <br /><br />

         <label htmlFor="">Email:</label>
         <input type="text" name="email" placeholder='enter your email' id="" onChange={(e)=> setEmail(e.target.value)} />
         <br /><br />

         <label htmlFor="">Password:</label>
         <input type="password" name="password" placeholder='enter your password' id=""  onChange={(e)=> setPassword(e.target.value)}/>
         <br /><br />

         <label htmlFor="">Aadhaar</label>
         <input type="text" onChange={(e)=> setAadhaar(e.target.value)} />
         <br /><br />

         <label htmlFor="">Pin Code</label>
         <input type="text"  onChange={(e)=> setPinCode(e.target.value)}/>
         <br /><br />

         <label htmlFor="">Address:</label>
         <input type="text" placeholder='enter your address'  onChange={(e)=> setAddress(e.target.value)}/>
         <br /><br />

         <label htmlFor="">Phone:</label>
         <input type="tel"  name="phone"placeholder='enter your phone' onChange={(e)=> setPhone(e.target.value)}/>
          <br /><br />

          <label htmlFor="">Range:</label>
          <input type="range" onChange={(e)=> setRange(e.target.value)}/>
          <br /><br />

          <label htmlFor="">Date of Birth:</label>
              <input type="date"  placeholder='dd/yy/mm'  onChange={(e)=> setDOB(e.target.value)}/>
              <br /><br />

              <select name="" id="" onChange={(e)=> setState(e.target.value)}>select State
              <option value="Select your state">Choose your state</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Delhi">Delhi</option>
              <option value="Haryana">Haryana</option>
            
              </select>
              <br /><br />


                <label htmlFor="">skills:</label>
              <input type="checkbox" value="java-script" onChange={(e)=> setSkills(e.target.value)} />java-script

              <input type="checkbox"  value="html" onChange={(e)=> setSkills(e.target.value)} />html

              <input type="checkbox"  value="react"  onChange={(e)=> setSkills(e.target.value)}/>react
              <br /><br />

              <label htmlFor="">upload file</label>
              <input type="file"  onChange={(e)=> setFile(e.target.value)}/>
              <br /><br />
              <label htmlFor="">bio</label>
              <textarea   onChange={(e)=> setBio(e.target.value)}  >
             
              </textarea>
              <br /><br />
              <button type='submit'>Submit</button>

            

         

    </form>
   </fieldset>
    
  )
}

export default SignUp
