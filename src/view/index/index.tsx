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
  

  useEffect(() => {
  }, []);


  return (
    <div className="all">
     index
    </div>
  )
};

export default Index;
