
import { lazy } from "react"



import Login from "../view/login/login";
// import A from "../view/world/a/a"

const World = lazy(() => import("../view/world/world"))
const Err = lazy(() => import("../view/err/err"))
const A = lazy(() => import('../view/world/a/a'))
const Index = lazy(() => import('../view/index/index'))
export const mainRoutes = [
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/*",
        element: <Err />
    },
    {
        path: '/world',
        element: <World />
    }, {
        path: '/world/a',
        element: <A />
    }
]

export const adminRoutes = [
    {
        path: '/world',
        element: <World />
    }, {
        path: '/world/a',
        element: <A />
    }]