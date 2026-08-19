import React,{useState,useEffect} from 'react'

const Format = () => {
  const [ error, setError] = useState("")
  const [ user , setUser] = useState(0)
  const [form , setForm] = useState({
     email:"",
     password:"",
     gender:"",
     
  })


     const handlerChange =(e) =>{
          const {name, value} = e.target
          setForm({
              ...form,
             [name]:value,
          })

     }
   
      


      

   const submit=(e)=>{
       e.preventDefault()


                  let obj = {}

                  if(form.email === ""){
                    obj.email="email is required";
                  }else if(!form.email.includes("@)")){
                    obj.email="email must be @"

                  }

                  if(form.password === ""){
                    obj.password= "password is required";
                  }else if(form.password.length<8){
                    obj.password="password must be at least 8 character"
                  }


                  if(form.gender === ""){
                    obj.gender="gendr is required";
                  }
                   
                   setError(obj)

                localStorage.setItem("users" , JSON.stringify(form))
             let a = JSON.parse(localStorage.getItem("users"))
               setUser(a);


                     console.log(form);
   }
              

               

  return (
    <>
     
      <fieldset>
        <form  onSubmit={submit}>
          <label htmlFor="">email</label>
          <input type="text"  name="email" value={form.email} placeholder='enter your email' onChange={handlerChange} />
          <p style={{
            color:"blue",
          }}>{error.email}</p>
            <br /><br />

            <label htmlFor="">password</label>
            <input type="text" name="password" value={form.password}placeholder='enter your password' onChange={handlerChange} />
               <p style={{
                color:"blue",
               }}>{error.password}</p>
             <br /><br />

             <label htmlFor="">gender</label>
             <input type="radio" name="gender" value="male" id=""onChange={handlerChange}/>male
             <input type="radio" name="gender" value="Female"  onChange={handlerChange} />female
                <p style={{
                  color:"blue",
                }}>{error.gender}</p>
             <br /><br />
             <button type='submit'>submit</button>
        </form>
        
      </fieldset>


            {user.email}
            {user.password}
            {user.gender}


    </>
 
  )
}

export default Format
