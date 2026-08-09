import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = (e) => {
   
    e.preventDefault();

    let data = {
      email,
      password
    };
    console.log("data", data);

    localStorage.setItem("keys", JSON.stringify(data));
    let res = JSON.parse(localStorage.getItem("keys"));
    console.log(res);
  };
  //   console.log(data)

  return (
    <div>
      <form onSubmit={Submit}>
        <h1>Login</h1>
        <label htmlFor="">Email:</label>
        <input
          type="text"
          value={email}
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">password:</label>
        <input
          type="text"
         value={password}
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />
       
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
