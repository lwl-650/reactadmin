// import React, { Component } from 'react'

// export default class err extends Component {
//   render() {
//     return (
//       <h1>err</h1>
//     )
//   }
// }
import { Result, Button } from 'antd';
const err = () => {

  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      /></>
  )

}
export default err