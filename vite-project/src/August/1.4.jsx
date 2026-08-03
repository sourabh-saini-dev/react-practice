import React,{useState} from 'react'

const From = () => {
    const [form,setForm] = useState({
     email:"",
     password: "",
     city: "",
     gender: "",
    })

    const [error, setError] = useState({})
     
    const handleChange=(e)=>{
         const {name,value} = e.target
         setForm({...form,
            [name]:value,

         })
    }

    const handleSubmit=(e)=>{
         e.preventDefault()
       

         let obj ={};

         if(form.email === ""){
          obj.email="email is a required"
         }
         if(form.password === ""){
          obj.password="password is required"
         }
         if(form.city ===""){
          obj.city="city is required"
         }

         if(form.gender === ""){
           obj.gender="gender is required"
         }

         setError(obj)
         
         localStorage.setItem("users" , JSON.stringify(form))

         if(Object.keys(obj).lengyh === 0){
           setForm({...form,
                email:"",
                password:"",
                city:"",
                gender:"",

               })
         }

              
               console.log(form)
         
    }
  return (
   <>
   <fieldset>
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Email </label>
        <input type="text" name="email" id="" onChange={handleChange} 
       />
        <p style={{
          color:"red",
        }}>{error.email}</p>
        <br /><br />



        <label htmlFor="">password</label>
        <input type="text" name="password" id="" onChange={handleChange} 
       />
          <p style={{
            color: "red",
          }}>{error.password}</p>
        <br /><br />

          <select name="city" id=""  onChange={handleChange} 
       
       >
            <option value="">Choose your city</option>
            <option value="jaipur">jaipur</option>
            <option value="kotputli-behror">kotputli-behror</option>
          </select>
          <p style={{
            color:"red",
          }}>{error.city}</p>

        <br /><br />


        <label htmlFor="">gender</label>
        <input type="radio"  name="gender"  value="male"  onChange={handleChange} style={{
         
          cursor:"pointer",
        }}/>male
        <input type="radio" name="gender" value="female" onChange={handleChange} style={{
           cursor:"pointer",

        }}/>female
        <p style={{
          color:"red",
        }}>{error.gender}</p>
        <br /><br />

        <button  type='submit'>submit</button >
           
       
                

                
    </form>
   </fieldset>
   </>
  )
}

export default From
