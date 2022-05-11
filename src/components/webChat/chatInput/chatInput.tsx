import * as React from 'react'
import { Input ,Button} from 'antd';
import "./chatInput.scss"

const { TextArea } = Input;
interface ChatInputProps{

}

 const chatInput:React.FC<ChatInputProps>=():React.ReactElement =>{
  return (
    <div>
        <div className="header">
            <img src="https://joeschmoe.io/api/v1/random" alt="" />
            <span>sadsad</span>
        </div>
        <div className="exhibition">

        </div>
        <div className="sendText">
        <TextArea placeholder="Autosize height based on content lines" autoSize />
        <Button type="primary">Primary Button</Button>
        </div>
    </div>
  )
}
export default chatInput