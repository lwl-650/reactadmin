
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'
import * as React from "react"
import { Suspense } from 'react'
import { mainRoutes } from "./routes"
import Tab from "../components/tab/tab"
import Login from "../view/login/login";
import NweIndex from "../view/newIndex/newIndex"
const RouterIndex = () => {


    return (

        <Router>
            <Routes>
             <Route path="/login" element={<Login />}></Route>
             <Route path="/" element={<NweIndex />}></Route>
            </Routes>
            
            

            




        </Router >




    )
}
export default RouterIndex

