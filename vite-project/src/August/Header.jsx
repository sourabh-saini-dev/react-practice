import React from 'react'
import {Link} from "react-router-dom"
import SignUp from './SignUp'
function Header() {
  return (
    <div>
      <Link to="/login">login</Link>
      <Link to={"signup"}>SignUp</Link>
    </div>
  )
}

export default Header
