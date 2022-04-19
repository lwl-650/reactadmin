import React, { useState, useEffect, Component,FC, ReactElement } from 'react'
import { Layout, Menu, Breadcrumb, PageHeader, Tag, Button, Progress } from 'antd';
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import "./tab.scss"
import { Link } from 'react-router-dom';
import RouteList from './indexRoutes'
import { createBreadAction } from "../../redux/bread_action"
import store from "../../redux/store"


interface TabProps {
  value?: string;
  children?: React.ReactNode; // 自己定义children的类型
  
  title?: string
  color?:string
}
interface Ak{
  key: string
}
interface TagObj{
  title:string
  color:string
}
// interface K{
//   key?:string
// }


const  tab:FC<TabProps>=({ value , title, children }):ReactElement =>{
  const { Header, Content, Sider } = Layout;
  const { SubMenu } = Menu
  // useEffect(() => {
  //   console.log(11)
  // },collapsed);给i他


  const [collapsed, setCollapsed] = useState(false)
  const [routerArr, setRouterArr] = useState(JSON.parse(localStorage.getItem("store") || '["首页"]'))
  const [tagList, setTagList] = useState(JSON.parse(localStorage.getItem("tagList") || '[{"title":"首页","color":"default"}]'))


  const toggle = (): void => {
    collapsed ? setCollapsed(false) : setCollapsed(true)
  };
  const fn= ({key}:Ak):void=> {
    console.log(key?.indexOf(","))
    let tag:string
    let tagObj:TagObj
    if(key.indexOf(",")<0){
      console.log(key)
      tag=key
    }else{
     console.log( key.slice(key.indexOf(",")+1))
     tag=key.slice(key.indexOf(",")+1)
    }
    tagList.forEach(({title}:TabProps,index:number) => {
       if(title==tag){
          tagList[index].color="#3b5999"
       }else{
        tagList[index].color="default"
        tagObj.title=tag
        tagObj.color="default"
        // tagList.push()
        tagList.push(tagObj)
       }
       setTagList([...tagList])

    });

    

    var arr = [];
    arr = key.split(',')
    localStorage.setItem('store', JSON.stringify(arr))
    setRouterArr(arr)


    // console.log()

    // console.log(routerArr)
    // store.dispatch(createBreadAction(routerArr))
    // console.log(store.getState())
  }
  const getChange = (e: object):void => {
    // console.log(routerArr)
    // console.log(e)
    // routerArr.push(e[0])
    // console.log(routerArr)
  }


  return (
    <Layout>
      <Sider trigger={null} collapsible
        collapsed={collapsed}>
        <div className="logo" />
        <div>
          <h1 style={{color:"#fff"}}>管理系统</h1>
        </div>
        <Menu theme="dark" mode="inline" onSelect={fn}
          onOpenChange={getChange}
          defaultOpenKeys={[routerArr[0]]}
          defaultSelectedKeys={[String(routerArr)]}>

          {
            RouteList.map((item, index):ReactElement => {
              if (item.children instanceof Array) {
                return (
                  <SubMenu key={item.key} icon={item.icon ? item.icon : ''} title={item.title}>
                    {
                      item.children.map((data: any) => {
                        return (
                          <Menu.Item key={data.key} icon={data.icon ? data.icon : ''} >
                            <Link to={data.path}>{data.title}</Link>
                          </Menu.Item>
                        )
                      })
                    }
                  </SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={item.key} icon={item.icon ? item.icon : ''} >
                    <Link to={item.path}> {item.title}</Link>
                  </Menu.Item>
                )
              }
            })}

        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Button onClick={toggle}
          >{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}</Button>
          <div className="tagList">
            {/* <PageHeader
            className="site-page-header"
            breadcrumb={{ routes }}
            onBack={onBacks}
          /> */}
            <Breadcrumb>
              {
                routerArr.map((item: string, index: string) => {
                  return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                })
              }
              {/* <Breadcrumb.Item>
                index
              </Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item> */}
              {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
            </Breadcrumb>
            <div className="tag">
              {/* <Tag closable icon={<CheckCircleOutlined />} color="success">
                success
              </Tag>
              <Tag icon={<SyncOutlined spin />} color="processing">
                processing
              </Tag>
              <Tag icon={<CloseCircleOutlined />} color="error">
                error
              </Tag>
              <Tag icon={<ExclamationCircleOutlined />} color="warning">
                warning
              </Tag> */}
              {/* color="#3b5999" */}
              {
                tagList.map(({title}:TabProps,{color}:TabProps, index: string):ReactElement => {
                  return <Tag className='hover' closable key={index} icon={<ClockCircleOutlined />} color={color}>
                    {title}
                  </Tag>
                })
              }
              {/* <Tag closable icon={<ClockCircleOutlined />} color="#3b5999">
                waiting
              </Tag>
              <Tag icon={<MinusCircleOutlined />} color="default">
                stop
              </Tag> */}
            </div>
          </div>
        </Header>

        <Content style={{ backgroundColor: "#ffffff" }}>
          {/* {props.children} */}
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
export default tab