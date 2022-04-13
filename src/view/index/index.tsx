import React, { useState, lazy } from 'react'


import "./index.scss"



// import {
//   Route,
//   Routes,
//   NavLink
// } from 'react-router-dom'
// import Hellow from '../hellow/hellow';
// import World from '../world/world';
// // const A=lazy(() => import('../../view/world/a/a'))
// import A from '../../view/world/a/a'
// import LeftList from '../../components/leftList/leftList'
// import TopList from "../../components/topList/topList"
import { findId } from "../../http/api"
import { Route ,Routes} from 'react-router-dom'
export default function Index() {

  const [launch, setLaunch] = useState(false)
  // findId({ id: 1 }).then((res: any) => {
  //   console.log(res)
  // })
  const getChose = () => {
    launch ? setLaunch(false) : setLaunch(true) 
    console.log(launch)
  }
  return (
    <div className='all'>

      {/* <LeftList ifLaunch={launch}></LeftList> */}

      <div className='bb'>
        {/* <TopList getChose={getChose}></TopList> */}
        <div className='cc'>
          <Routes>
             {/* <Route path="/" element={<K />}></Route> */}
          </Routes>
        </div>
      </div>
    </div>
  )
}



