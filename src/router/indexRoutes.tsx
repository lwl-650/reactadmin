
import {
  SettingOutlined,
  HomeOutlined,
  BranchesOutlined,
  ControlOutlined,
  AppstoreAddOutlined,
  FileTextOutlined,
  BlockOutlined,
  UserOutlined
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
    title: 'admin',
    key:'admin',
    icon: <UserOutlined />,
    isVisible: true,
    path: '/admin',
  },
  {
    title: '列表一',
    key:'列表一',
    icon: <BranchesOutlined />,
    isVisible: true,
    path: '/world',
    children: [
      {
        title: '分析',
        key:'列表一,分析',
        icon:<BlockOutlined />,
        isVisible: true,
        path: '/analysis',
      },
      {
        title: '信息',
        key:'列表一,信息',
        icon: <FileTextOutlined />,
        isVisible: true,
        path: '/world/a',
      }
    ]
  },
  {
    title: '列表二',
    key: '列表二',
    icon: <AppstoreAddOutlined />,
    isVisible: true,
    path: '/world',
    children: [
      {
        title: '管理',
        key: '列表二,管理',
        icon: <ControlOutlined />,
        isVisible: true,
        path: '/world',
      },
      {
        title: '设置',
        key: '列表二,设置',
        icon: <SettingOutlined />,
        isVisible: true,
        path: '/world/a',
      }
    ]
  },

]
export default RouteList