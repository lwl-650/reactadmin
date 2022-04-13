import { useState } from 'react'
import { Menu } from 'antd';
import RouteList from './indexRoutes'
import {Link, NavLink } from 'react-router-dom'
// import "./leftList.scss"
export default function LeftList(props:any) {
    const { SubMenu } = Menu;
    // const [isLeve, setIsLeve] = useState(false);
    // const [collapsed, setCollapsed] = useState(false)
    // const [setW, setSetW] = useState('160px')

    // const toggleCollapsed = ():void=> {
    //     setSetW("160px")
    //     setCollapsed(true)
    //     setIsLeve(true)

    //     setW === "160px" ? setSetW("0.925rem") : setSetW("160px")
    //     // collapsed ? setCollapsed(false) : setCollapsed(true)
    //     // isLeve ? setIsLeve(false) : setIsLeve(true)

    // }
    
    const fn = (e: any) => {
        console.log(e)
    }

return (
    // <div className='box' style={{ width: !props.ifLaunch ? '165px' : "50px", height: '100%' }}>

    // <div className="top"></div>
    <Menu
        defaultSelectedKeys={['/hellow']}
        defaultOpenKeys={['/world']}
        onClick={fn}
        mode="inline"
        theme="dark"
        style={{ width: props.ifLaunch?"50px":"160px" }}
        inlineCollapsed={props.ifLaunch}
    >
        {
            RouteList.map((item, index) => {
                if (item.children instanceof Array) {
                    return (
                        <SubMenu key={index}  icon={item.icon ? item.icon : ''} title={item.title}>
                            {
                                item.children.map((data: any) => {
                                    return (
                                        <Menu.Item  key={data.path} icon={data.icon ? data.icon : ''} >
                                            {/* {data.title} */}
                                            {/* <Link ></Link> */}
                                            <NavLink to={data.path}></NavLink>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                    )
                } else {
                    return (
                        <Menu.Item key={item.path} icon={item.icon ? item.icon : ''} >
                           <NavLink to={item.path}></NavLink>  {item.title}
                        </Menu.Item>
                    )
                }
            })}
    </Menu>

        
    // </div>
)
}
