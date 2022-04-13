
import {
  SmileOutlined,
  HomeOutlined,
} from '@ant-design/icons';

import Hellow from '../../view/hellow/hellow';
import World from '../../view/world/world';
// const A=lazy(() => import('../../view/world/a/a'))
import A from '../../view/world/a/a'


const RouteList: any[] = [
  {
    title: '首页',
    icon: <HomeOutlined />,
    isVisible: true,
    path: '/',
  },
  {
    title: '22',
    icon: <HomeOutlined />,
    className: 'm-sidebar-home',
    isVisible: true,
    path: '/world',
    component: <World />,
    children: [
      {
        title: 'xx管理',
        icon: <SmileOutlined />,
        className: 'm-sidebar-home',
        isVisible: true,
        path: '/world/a',
        component: <A />
      }
    ]
  },

]
export default RouteList