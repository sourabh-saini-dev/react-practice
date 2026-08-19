import React,{useState,useEffect} from 'react'

const Form = () => {
  const [user, setUser] = useState(0)
  const [form, setForm] = useState({
    Name:"",
    Email:"",
    Password:"",

    Gender:"",

    State:"",

    Country:"",

    

  })

        const handlerChange=(e)=>{
          const {name,value} = e.target
          
          setForm({
            ...form,
            [name]: value,
          })

        }

            const submit=(e)=>{
             e.preventDefault()



             
            localStorage.setItem("user" ,JSON.stringify(form))
             let  ans = JSON.parse(localStorage.getItem("user"))
             setUser(ans);
             

             console.log(form);
             

            }






  return (
    <div>
      <fieldset>
        <form onSubmit={submit} >
          <label htmlFor="">Name:</label>
          <input
             type="text"
            name="Name"
             value={form.Name}
             onChange={handlerChange}

           />
           <br /><br />
            
            <label htmlFor="">Email:</label>
            <input type="text" 
               name="Email"
               value={form.Email}
               onChange={handlerChange}
            />
            <br /><br />

            <label htmlFor="">Password:</label>
            <input type="text"
             name="Password"
              value={form.password}
              onChange={handlerChange}
             />
             <br /><br />

             <label htmlFor="">Gender:</label>
              <input type="radio"
               name="Gender"
               value="male"
               onChange={handlerChange}
               />male
               <input type="radio"
                 name="Gender"
                 value="female"
                  onChange={handlerChange}
                />female
                <br /><br />

                <select name="State" id="" onChange={handlerChange}>State:
                <option value="">Choose Your State</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Ahmedabad">Ahmedabad</option>
                </select>
                <br /><br />


                  
                   <select name="Country" id="" onChange={handlerChange}>Country:
                   <option value="">Choose Your Countery</option>
                   <option value="India">India</option>
                   <option value="Japan">Japan</option>
                   <option value="Nepal">Nepal</option>
                   <option value="Australia">Australia</option>
                   </select >
                   <br /><br />


                   <button type='submit'>submit</button>



        </form>
      </fieldset>
                {user.Name}
                {user.Email}
                {user.Password}
                {user.Gender}
                {user.State}
                {user.Country}
                {user.State}
      
      
    </div>
  )
}

export default Form
