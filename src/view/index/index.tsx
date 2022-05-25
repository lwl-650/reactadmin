import {
  useState,
  useEffect,
  FC,
  ReactElement,
  MouseEventHandler,
} from "react";

import "./index.scss";
import { findId, findAll, delById, addUser } from "../../http/api";
import {
  Input
} from "antd";

interface IndexProps {
  // onClick ?:event: MouseEvent<HTMLDivElement>||undefined,
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;

}


const Index: FC<IndexProps> = ({ onClick, children }): ReactElement => {


  const [list, setList] = useState([1, 2, 34, 5, 6])

  useEffect(() => {
  }, []);

  function fn(e:any):void{
     console.log(e)
    console.log(e.target.getAttribute('data-id'))
  }

  return (
    <div className="all" onClick={fn}>
      index
      {
        list.map(item => <button key={item} data-id={item}>{item}</button>)
      }
    </div>
  )
};

export default Index;
