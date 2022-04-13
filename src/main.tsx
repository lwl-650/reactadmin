import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import store from "./redux/store"
// import 'lib-flexible';
ReactDOM.render(
    <App />,
  document.getElementById('root')
)
store.subscribe(()=>{
  ReactDOM.render(
    <App />,
  document.getElementById('root')
)
})
