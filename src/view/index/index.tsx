import React, { useState,useEffect, lazy } from 'react'


import "./index.scss"



// import {
//   Route,
//   Routes,
//   NavLink
// } from 'react-router-dom'
// import Hellow from '../hellow/hellow';
// import World from '../world/world';
// // const A=lazy(() => import('../../view/world/a/a'))
// import A from '../../view/world/a/a'
// import LeftList from '../../components/leftList/leftList'
// import TopList from "../../components/topList/topList"
import { findId, findAll } from "../../http/api"
import { Route, Routes } from 'react-router-dom'
import { Table, Button, Space, Tag } from 'antd';
export default function Index() {

  const [launch, setLaunch] = useState(false)
  const getChose = () => {
    launch ? setLaunch(false) : setLaunch(true)
  }
  const del = (a: any, text: any) => {
    // console.log("🐱‍🏍 => file: index.tsx => line 29 => del => text", text)
    // console.log("🐱‍🏍 => file: index.tsx => line 29 => del => a", a)
    //    console.log("==================")
    //    data.splice(text,1)
    //  setData([...data])
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      tags: ['nice', 'developer'],
    },
    {
      title: 'Age',
      dataIndex: 'gender',
      tags: ['nice', 'developer'],
    },
    {
      title: 'Address',
      dataIndex: 'avatar',
      tags: ['nice', 'developer'],
    },

    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a >编辑 {record.names}{text.names}</a>
          <a style={{ color: "red" }}  >删除</a>
        </Space>
      ),
    },

  ];

  // const [data, setData] = useState({hits:[] })
  const [data, setData] = useState([])
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [loading, setLoading] = useState(false)



  const start = () => {
    setLoading(true)
    // ajax request after empty completing
    setTimeout(() => {
      setLoading(true)
      setSelectedRowKeys([])
    }, 1000);
  };
  const onSelectChange = (selectedRowKeys: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys)
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
useEffect(()=>{
  getList()
},[])
  
const getList=()=>{
  findAll().then((res: any) => {
    console.log(res.data)
    setData(res.data)
  })
}
 


  return (
    <div className='all'>

      <div style={{ marginBottom: 16 }}>
        {/* <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button> */}
        {/* <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span> */}
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} rowKey={(res:any)=>res.id}/>
    </div>
  )
}



