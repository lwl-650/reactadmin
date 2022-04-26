import React from 'react'
import { useNavigate } from "react-router-dom";
import "./login.scss"
export default function Login() {

    const navigate = useNavigate();
    const go = () => {
        navigate("/world")
    }

    return (
        
            <div className="bglogin">
                <input type="text" placeholder="userName" />
                <input type="text" placeholder="repo" />
                <button type="submit" onClick={go}>Go</button>
            </div>

    )
}





