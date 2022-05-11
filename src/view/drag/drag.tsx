import * as React from "react";
import copy from "copy-to-clipboard";
import "./drag.scss";
import { StepBackwardOutlined } from "@ant-design/icons";
import Socket from "./socket";
import ChatList from "@/components/webChat/chatList/chatList";
import ChatInput from "@/components/webChat/chatInput/chatInput";

interface DragProps { }

const drag: React.FC<DragProps> = (): React.ReactElement => {
  let socket = new Socket("ws://localhost:8088/web?userId=zs", "");

  React.useEffect(() => {
    socket.onmessage(processingData.bind(this));
    socket.onclose();
  }, []);
  const processingData = (data: any) => {
    console.log(
      "🐱‍🏍 => file: drag.tsx => line 20 => processingData => data",
      data
    );
    if (data.msg === "推送消息") {
      let dataval = JSON.parse(data.res);
      console.log(
        "🐱‍🏍 => file: drag.tsx => line 22 => processingData => dataval",
        dataval
      );
      // if (dataval.type === 'hbxs-yjzh-sms-fax-refresh') {
      console.log("websocket");
      // }
    }
  };

  const getFont = (e: any) => {
    socket.send("jjjjj");

    console.log("🐱‍🏍 => file: drag.tsx => line 13 => getFont => e", e.target);
    // if (copy(e.target.innerHTML)) {
    //   alert("複製成功");
    // } else {
    //   alert("err");
    // }
  };
  const geta = (e: any) => {
    console.log(e)
  }

  return (
    <div className="chat">
      <div className="left">
        <ChatList getList={geta} />
        <ChatList getList={geta} />
      </div>
      <div className="right">
        <ChatInput />
      </div>
    </div>
  )
}
export default drag
