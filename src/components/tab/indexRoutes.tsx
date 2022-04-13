
import {
  SmileOutlined,
  HomeOutlined,
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
    icon: <HomeOutlined />,
    isVisible: true,
    path: '/world',
    children: [
      {
        title: 'world管理',
        key:'列表一,world管理',
        icon: <SmileOutlined />,
        isVisible: true,
        path: '/world',
      },
      {
        title: 'xx管理',
        key:'列表一,xx管理',
        icon: <SmileOutlined />,
        isVisible: true,
        path: '/world/a',
      }
    ]
  },
  {
    title: '列表二',
    key: '列表二',
    icon: <HomeOutlined />,
    isVisible: true,
    path: '/world',
    children: [
      {
        title: 'world管理1',
        key: '列表二,world管理1',
        icon: <SmileOutlined />,
        isVisible: true,
        path: '/world',
      },
      {
        title: 'xx管理2',
        key: '列表二,xx管理2',
        icon: <SmileOutlined />,
        isVisible: true,
        path: '/world/a',
      }
    ]
  },

]
export default RouteList