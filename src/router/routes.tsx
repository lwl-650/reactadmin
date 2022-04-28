
import { lazy } from "react"

import Login from "../view/login/login";
// import A from "../view/world/a/a"

const World = lazy(() => import("../view/world/world"))
const Err = lazy(() => import("../view/err/err"))

const Index = lazy(() => import('../view/index/index'))
const Xx = lazy(() => import('../view/world/xx/xx'))
const WorldIndex = lazy(() => import('../view/world/worldIndex/worldIndex'))
const Analysis =lazy(() => import('../view/analysis/analysis'))
const Admin =lazy(() => import('@/view/admin/admin'))
const Who =lazy(() => import('@/view/who/who'))
export const mainRoutes = [
    { path: "/", element: <Index />, },
    { path: "/*", element: <Err /> },
    {
        path: '/analysis',
        element: <Analysis />
    },
    {
        path: '/admin',
        element: <Admin />
    },
    {
        path: '/world', element: <World />, mate: true, childen: [
            {
                path: "",
                element: <WorldIndex />
            },
            {
                path: "xx",
                element: <Xx />
            }
        ],

    },
    {
        path: '/who',
        element: <Who />
    },
    {
        path: '/login',
        element: <Login />
    },

]

export const adminRoutes = [
    {
        path: '/world',
        element: <World />
    }]