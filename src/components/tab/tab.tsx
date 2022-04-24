import React, { useState, useEffect, Component, FC, ReactElement } from 'react'
import {
  Layout, Menu, Breadcrumb, PageHeader,
  Popover,
  Tag, Button, Avatar
} from 'antd';
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  PoweroffOutlined,
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
  color?: string
}
interface Ak {
  key: string
}
interface TagObj {
  title?: string
  color?: string
}
// interface K{
//   key?:string
// }


const tab: FC<TabProps> = ({ value, title, children }): ReactElement => {
  const { Header, Content, Sider } = Layout;
  const { SubMenu } = Menu
  // useEffect(() => {
  //   console.log(11)
  // },collapsed);

  const [collapsed, setCollapsed] = useState(false)
  const [routerArr, setRouterArr] = useState(JSON.parse(localStorage.getItem("store") || '["首页"]'))
  const [tagList, setTagList] = useState(JSON.parse(localStorage.getItem("tagList") || '[{"title":"首页","color":"default"}]'))
  const [loading,setLoading]=useState(false)

  const sign=():void=>{
    let timer
    clearTimeout(timer)
    setLoading(true)
    timer= setTimeout(()=>{
        setLoading(false)
  },1500)

  }
  const toggle = (): void => {
    collapsed ? setCollapsed(false) : setCollapsed(true)
  };
  const fn = ({ key }: Ak): void => {
    let tag: string
    let tagObj: TagObj = {}

    if (key.indexOf(",") < 0) {
      console.log(key)
      tag = key
    } else {
      console.log(key.slice(key.indexOf(",") + 1))
      tag = key.slice(key.indexOf(",") + 1)
    }

    tagList.forEach(({ title }: TabProps, index: number) => {
      if (title == tag) {
        tagList[index].color = "#3b5999"
      } else {
        tagList[index].color = "default"
        tagObj.title = tag
        tagObj.color = "default"
        tagList.push(tagObj)
      }
      setTagList([...tagList])

    });
    var arr = [];
    arr = key.split(',')
    localStorage.setItem('store', JSON.stringify(arr))
    setRouterArr(arr)

    console.log(routerArr)
    console.log("🐱‍🏍 => file: tab.tsx => line 92 => fn => routerArr", routerArr)
    // store.dispatch(createBreadAction(routerArr))
    // console.log(store.getState())
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
        Click me!
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
                tagList.map(({ title }: TabProps, { color }: TabProps, index: string): ReactElement => {
                  return <Tag className='hover' closable key={index} icon={<ClockCircleOutlined />} color={color}>
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
          {/* {props.children} */}
          {children}
        </Content>

      </Layout>

    </Layout>
  )
}
export default tab