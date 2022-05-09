import * as React from "react";
import copy from "copy-to-clipboard";
import "./drag.scss";
import { StepBackwardOutlined } from "@ant-design/icons";
import Socket from "./socket";

interface DragProps {}

const drag: React.FC<DragProps> = (): React.ReactElement => {
  let socket = new Socket("ws://localhost:8088/web?userId=zs", "");

  React.useEffect(() => {
    socket.onmessage(processingData.bind(this));
    socket.onclose()

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
    socket.send("jjjjj")
    
    console.log("🐱‍🏍 => file: drag.tsx => line 13 => getFont => e", e.target);
    // if (copy(e.target.innerHTML)) {
    //   alert("複製成功");
    // } else {
    //   alert("err");
    // }
  };

  return (
    <>
      <StepBackwardOutlined
        style={{ fontSize: "30px" }}
        onClick={getFont.bind(this)}
      />

      <b onClick={getFont.bind(this)}>dsds</b>
      <svg
        viewBox="0 0 1024 1024"
        focusable="false"
        data-icon="step-backward"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 000 33.9M330 864h-64a8 8 0 01-8-8V168a8 8 0 018-8h64a8 8 0 018 8v688a8 8 0 01-8 8"></path>
      </svg>
    </>
  )
}
export default drag
