import React from 'react'
import Index from '../index/index'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'

import { Suspense } from 'react'
import { mainRoutes } from "../../router/routes"
import Tab from "../../components/tab/tab"

export default function newIndex() {
    return (
        <div>
            

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
        </div>
    )
}
