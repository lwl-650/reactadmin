import * as React from 'react';
import { useNavigate } from "react-router-dom";
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
      </>
   )

}

export default World



