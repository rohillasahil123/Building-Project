import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => { 

   const navigate = useNavigate ()
   const handellogout  = ()=>{
  navigate ("/")
  alert("hlo")
   }




  return (
    <div>
        <button onClick={handellogout}>Logout</button>
    </div>
  )
}

export default Logout