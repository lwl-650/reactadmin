
import { PageHeader, Tag, Button, Progress } from 'antd';
import React, { useState } from 'react'
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
import "./topList.scss"
export default function LeftList(props: any) {
  const routes = [
    {
      path: 'index',
      breadcrumbName: '首页',
    },
    {
      path: 'first',
      breadcrumbName: '一级',
    },
    {
      path: 'second',
      breadcrumbName: '二级',
    },
  ]
  const [collapsed, setCollapsed] = useState(false)
  const topC = (): void => {
    collapsed ? setCollapsed(false) : setCollapsed(true)
  }
  return (
    <div className="rBox">
      <div className='topBox'>
        <Progress className='progress' percent={30} strokeWidth={2} />
        <div className="header">

          <Button onClick={() => { props.getChose(); topC() }}

          >{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}</Button>
          <PageHeader
            className="site-page-header"
            breadcrumb={{ routes }}
          />
        </div>
        <div className="tag">
          <Tag closable icon={<CheckCircleOutlined />} color="success">
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
          </Tag>
          <Tag icon={<ClockCircleOutlined />} color="#3b5999">
            waiting
          </Tag>
          <Tag icon={<MinusCircleOutlined />} color="default">
            stop
          </Tag>
        </div>
      </div>
    </div>
  )
}
