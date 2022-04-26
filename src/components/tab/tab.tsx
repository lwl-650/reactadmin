import React, { useState, useEffect, Component, FC, ReactElement } from 'react'
import {
  Layout, Menu, Breadcrumb, PageHeader,
  Popover,
  Tag, Button, Avatar, message
} from 'antd';
import {
 
  PoweroffOutlined,
  ClockCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import "./tab.scss"
import { Link,useNavigate } from 'react-router-dom';
import RouteList from './indexRoutes'
import { createBreadAction } from "../../redux/bread_action"
import store from "../../redux/store"

import navigates from "../../util/navigate"

interface TabProps {
  value?: string;
  children?: React.ReactNode; // 自己定义children的类型
  title?: string
  color?: string
}
interface Ak {
  key: string
}
interface TagObj {
  title?: string
  color?: string
}



const tab: FC<TabProps> = ({ value, title, children }): ReactElement => {
  const { Header, Content, Sider } = Layout;
  const { SubMenu } = Menu
  const  navigate=useNavigate()
  // useEffect(() => {
  //   console.log(11)
  // },collapsed);

  const [collapsed, setCollapsed] = useState(false)
  const [routerArr, setRouterArr] = useState(JSON.parse(localStorage.getItem("store") || '["首页"]'))
  const [tagArr, setTagArr] = useState(JSON.parse(localStorage.getItem("tagArr") || '["首页"]'))
  const [tagList, setTagList] = useState(JSON.parse(localStorage.getItem("tagList") || '[{"title":"首页","color":"#3b5999"}]'))
  const [loading, setLoading] = useState(false)

  const sign = (): void => {
    let timer
    clearTimeout(timer)
    setLoading(true)
    timer = setTimeout(() => {
      
      setLoading(false)
      message.success("退出成功", 1)
      navigate("/login")
    }, 1500)

  }
  const toggle = (): void => {
    collapsed ? setCollapsed(false) : setCollapsed(true)
  }
  const fn = ({ key }: Ak): void => {
    let tag: string
    let tagObj: TagObj = {}

    if (key.indexOf(",") < 0) {
      tag = key
    } else {
      tag = key.slice(key.indexOf(",") + 1)
    }


    if (tagArr.indexOf(tag) == -1) {
      tagArr.push(tag)
      tagObj.color = "#3b5999"
      tagObj.title = tag
      tagList.forEach((item:any) => {
        item.color="default"
      });
      tagList.push(tagObj)
      setTagList([...tagList])
    }

    console.log("🐱‍🏍 => file: tab.tsx => line 79 => fn => tagArr", tagArr)
    localStorage.setItem('tagArr', JSON.stringify(tagArr))
    console.log("🐱‍🏍 => file: tab.tsx => line 90 => fn => tagList", tagList)
    localStorage.setItem('tagList', JSON.stringify(tagList))
    



    var arr = [];
    arr = key.split(',')
    localStorage.setItem('store', JSON.stringify(arr))
    setRouterArr(arr)
    console.log("🐱‍🏍 => file: tab.tsx => line 92 => fn => routerArr", routerArr)
  }
  const getChange = (e: object): void => {
    // console.log(routerArr)
    // console.log(e)
    // routerArr.push(e[0])
    // console.log(routerArr)
  }

  const enterLoading = (index: any) => {

  }

  const content = (
    <div className='sign'>
      <p>Content</p>
      <p>Content</p>
      {/* <Button type="text" loading={true}>Text</Button> */}
      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        loading={loading}
        onClick={sign}
      >
        退出登录！
      </Button>
    </div>
  );

  return (
    <Layout>
      <Sider trigger={null} collapsible
        collapsed={collapsed}>
        <div className="logo" />
        <div>
          <h1 style={{ color: "#fff" }}>管理系统</h1>
        </div>
        <Menu theme="dark" mode="inline" onSelect={fn}
          onOpenChange={getChange}
          defaultOpenKeys={[routerArr[0]]}
          defaultSelectedKeys={[String(routerArr)]}>

          {
            RouteList.map((item, index): ReactElement => {
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
            <Breadcrumb>
              {
                routerArr.map((item: string, index: string) => {
                  return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                })
              }

            </Breadcrumb>
            <div className="tag">

              {
                tagList.map(({ title, color }: TabProps, index: string): ReactElement => {
                  return <Tag className='hover' closable key={title} icon={<ClockCircleOutlined />} color={color}>
                    {title}
                  </Tag>
                })
              }

            </div>
          </div>

          <div className="avatar">

            <Popover placement="topLeft" title="Title" content={content} >
              <div className="show-avatar">
                <Avatar src="https://joeschmoe.io/api/v1/random" size={40}>

                </Avatar>
              </div>
            </Popover>
          </div>
        </Header>

        <Content style={{ backgroundColor: "#ffffff" }}>
          {children}
        </Content>

      </Layout>

    </Layout>
  )
}
export default tab