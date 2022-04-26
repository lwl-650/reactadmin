import * as React from 'react';
import {
   BrowserRouter as Router,
   Route,
   Routes,
   Navigate,
   useNavigate,
   Link,
   Outlet
} from 'react-router-dom'

const WorldIndex = React.lazy(() => import('./worldIndex/worldIndex'))
const Xx = React.lazy(() => import('./xx/xx'))

// import  WorldIndex from "./worldIndex/worldIndex"
// import Xx from "./xx/xx"


interface WorldProps {
}



const World: React.FC<WorldProps> = ({ }): React.ReactElement => {
   const navigate = useNavigate();
   const [data, setData] = React.useState({
      list: [{ "name": "zs", age: 12 }],
      li: false,
      tt: "tt",
   })


   //  const get=()=>{
   //        setData({tt:"yyyy"})
   //  }

   function get() {
      // setData({ tt: "hjhk" })
      localStorage.setItem("iflogin","true")
      navigate("/login")
   }

   return (
      <>
         <div>{data.tt}</div>
         <button onClick={get}>15133</button>

         {/* <Routes>
                    <Route path="" element={<WorldIndex />}></Route>
                    <Route path="xx" element={<Xx />}></Route>
                </Routes> */}


                <Link to="">WorldIndex</Link>================
                <Link to="xx">xx</Link>
                <Outlet/>
      </>
   )

}

export default World



