
import {
  SmileOutlined,
  HomeOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';

const RouteList: any[] = [
  {
    title: '首页',
    key:'首页',
    icon: <HomeOutlined />,
    isVisible: true,
    path: '/',
  },
  {
    title: '列表一',
    key:'列表一',
    icon: <CheckCircleOutlined />,
    isVisible: true,
    path: '/world',
    children: [
      {
        title: '分析',
        key:'列表一,分析',
        icon: <MinusCircleOutlined />,
        isVisible: true,
        path: '/world',
      },
      {
        title: '信息',
        key:'列表一,信息',
        icon: <SyncOutlined />,
        isVisible: true,
        path: '/world/a',
      }
    ]
  },
  {
    title: '列表二',
    key: '列表二',
    icon: <CloseCircleOutlined />,
    isVisible: true,
    path: '/world',
    children: [
      {
        title: '管理',
        key: '列表二,管理',
        icon: <SmileOutlined />,
        isVisible: true,
        path: '/world',
      },
      {
        title: '设置',
        key: '列表二,设置',
        icon: <SmileOutlined />,
        isVisible: true,
        path: '/world/a',
      }
    ]
  },

]
export default RouteList