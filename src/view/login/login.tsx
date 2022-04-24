import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Login() {

    localStorage.setItem("iflogin","false")
    const navigate = useNavigate();
const go =()=>{
    navigate("/world")
}

    return (
        <>
         <input type="text" placeholder="userName"/>
          <input type="text" placeholder="repo"/>
          <button type="submit" onClick={go}>Go</button>
         
        </>
         
      
    )
}



 
 
