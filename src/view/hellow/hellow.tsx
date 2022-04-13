import  { Component } from 'react'

export default class hellow extends Component {

  fn(){
    console.log("hhhhhh")
  }

  render() {
   
    return (
      
      <div onClick={this.fn}>hellow</div>
    )
    
  }
}
