import * as React from 'react'
import { Input, Button } from 'antd';

import debounce from 'lodash/debounce';

import "./chatInput.scss"

const { TextArea } = Input;
interface ChatInputProps {
  addSend(text: string): void;
}

const chatInput: React.FC<ChatInputProps> = ({ addSend }: ChatInputProps): React.ReactElement => {

  const [value, setValue] = React.useState("")

  const [userQuery, setUserQuery] = React.useState("");


  const sendQuery = (query: string) => console.log(`Querying for ${query}`);

  const delayedQuery = React.useCallback(debounce((q: string) => sendQuery(q), 500), []);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserQuery(e.target.value);
    delayedQuery(e.target.value);
  };


  const send = () => {
    addSend(value)
  }






  // const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

  //   // console.log('Change:', e.target.value);
  //   setValue(e.target.value)
  // };

  return (
    <div>
      <div className="header">
        <img src="https://joeschmoe.io/api/v1/random" alt="" />
        <span>sadsad</span>
      </div>
      <div className="exhibition">

      </div>
      <div className="sendText">

        <TextArea onChange={onChange} value={userQuery} autoSize />
        {/* <TextArea onChange={onChange} placeholder="Autosize height based on content lines" autoSize /> */}
        <Button type="primary" onClick={send.bind(this)}>Primary Button</Button>
      </div>
    </div>
  )
}
export default chatInput