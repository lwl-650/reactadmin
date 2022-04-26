
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
import PrivateRoute from "./PrivateRoute"
import Index from "../view/index/index"
import Err from "../view/err/err"



interface Router{
    path?:string
    mate?:boolean
    element?:React.ReactNode
    childen?:Array<Router>
}

const RouterIndex = () => {

    return (
        <Router>
            <Routes>
                {getRoute(mainRoutes)}
            </Routes>
        </Router>

    )
}

const getRoute = (mainRoutes: Array<Router>) => {
    return mainRoutes.map((route: Router) => {

        if (route.path == "/login") {
            return <Route path={route.path} element={
                <PrivateRoute>
                    {route.element}
                </PrivateRoute>
            } key={route.path}>

            </Route>
        }
        return <Route path={route.path} element={
            <PrivateRoute mate={route.mate}>
                <Tab>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        {route.element}
                    </Suspense>
                </Tab>
            </PrivateRoute>}
            key={route.path}>
            {route.childen ? nesting(route.childen) : null}
        </Route>
    })
}

const nesting = (come: Array<Router>) => {

    return come.map((item: Router) => {
        return <Route {...item} key={item.path}></Route>
    })
}
export default RouterIndex

