
import { lazy } from "react"

import Login from "../view/login/login";
// import A from "../view/world/a/a"

const World = lazy(() => import("../view/world/world"))
const Err = lazy(() => import("../view/err/err"))
const A = lazy(() => import('../view/world/a/a'))
const Index = lazy(() => import('../view/index/index'))
const Xx = lazy(() => import('../view/world/xx/xx'))
const WorldIndex = lazy(() => import('../view/world/worldIndex/worldIndex'))
const Analysis =lazy(() => import('../view/analysis/analysis'))
const Admin =lazy(() => import('@/view/admin/admin'))

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
        path: '/world/a',
        element: <A />
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
    }, {
        path: '/world/a',
        element: <A />
    }]