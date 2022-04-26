import { Navigate, useLocation } from "react-router-dom"

import React, {useEffect} from "react"
import Login from "../view/login/login"


interface PrivateRouteProps{
    children?:any
    mate?:boolean
}


const PrivateRoute=({ children,mate }:PrivateRouteProps) =>{

    return true ? (
      children
    ) : (
      <Login/>
    )
  }

export default PrivateRoute