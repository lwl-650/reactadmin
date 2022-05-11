import * as React from "react";
import { Avatar, Image } from 'antd';
import "./chatList.scss"
interface ChatListProps {
  getList(e: any): any;
}



const ChatList: React.FC<ChatListProps> = ({ getList }: ChatListProps): React.ReactElement => {

  return (
    <>
      <div className="userlist" onClick={getList.bind(this)}>
        <Avatar
          size={50}
          src="https://joeschmoe.io/api/v1/random" />
        <div className="info" >
          <div className="name">
            <div>lisizhangxj</div>
            <div>2022-5-10</div>
          </div>
          <div className="text">
            skdjfghskjdfshgdkfjsdfhksdfkjshfjsdjj
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatList;
