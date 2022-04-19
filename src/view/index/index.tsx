import React, { useState, lazy } from 'react'


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
import { Table, Button } from 'antd';
export default function Index() {

  const [launch, setLaunch] = useState(false)
  const getChose = () => {
    launch ? setLaunch(false) : setLaunch(true)
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  interface User {
    text:number,
    nn:string
  }
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
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
  findAll().then(res => {
    console.log(res, "================")
  })


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
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  )
}



