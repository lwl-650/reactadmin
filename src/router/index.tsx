
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
import World from "../view/world/world"
const RouterIndex = () => {


    return (

        <Router>

            <Tab title="啦啦啦">
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        {/* <Route path="/" element={<Index />}></Route> */}
                        {
                            mainRoutes.map(route => {
                                return <Route {...route} key={route.path}></Route>
                            })
                        }
                        {/* <Route path="/*" element={<Navigate to="/err" />} /> */}
                        {/* <Route path="/" element={<Index />}></Route>
                         <Route path="/*" element={<Err />}></Route> */}
                    </Routes>
                </Suspense>
            </Tab>




        </Router >




    )
}
export default RouterIndex

