import React, { useState } from 'react'
import SideNav from "./DashData"
import { Layout, Menu, Badge, Tooltip, Button, Drawer } from 'antd';
import { MdDashboard, MdVerified } from "react-icons/md"
import { BsBoxSeam, BsEnvelopeFill } from "react-icons/bs"
import { RiUser3Fill } from "react-icons/ri"
import { GiHanger } from "react-icons/gi"
import { VscFeedback } from "react-icons/vsc"
import { BellFilled, MenuOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const NestedLayout = ({ children }) => {

    const [visible, setVisible] = useState(false)

    return (
        <div className="w-full">

            <Layout style={{width: '100%'}}>

                {/* sideNav */}
                <div className="hidden md:block z-30">
                    <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            background: "black",
                        }}
                    >
                        <div className="bg-black">
                            <img className="h-24 w-full" src="/images/logo.png" alt="brand logo" />
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<MdDashboard className="h-4 w-4" />}>
                                Dashboard
                            </Menu.Item>
                            <SubMenu key="sub1" icon={<BsBoxSeam className="h-4 w-4" />} title="Manage boutique">
                                <Menu.Item key="2">1. Layout</Menu.Item>
                                <Menu.Item key="3">2. Products</Menu.Item>
                                <Menu.Item key="4">3. Orders</Menu.Item>
                                <Menu.Item key="5">4. Marketing</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="6" icon={<BsEnvelopeFill className="h-4 w-4" />}>
                                Messaging
                            </Menu.Item>
                            <Menu.Item key="7" icon={<RiUser3Fill className="h-4 w-4" />}>
                                Users
                            </Menu.Item>
                            <Menu.Item key="8" icon={<GiHanger className="h-4 w-4" />}>
                                Size Chart
                            </Menu.Item>
                            <Menu.Item key="9" icon={<VscFeedback className="h-4 w-4" />}>
                                Reviews
                            </Menu.Item>
                            <Menu.Item key="10" icon={<MdVerified className="h-4 w-4" />}>
                                Verification
                            </Menu.Item>
                        </Menu>
                    </Sider>
                </div>

                <div className="" >
                    <Layout  className="site-layout" style={{width: "100%"}}>
                        {/* Top Nav on Center section */}
                        <div className="z-20 bg-white fixed top-0 py-4 px-4 border-b border-gray-200 w-full flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="md:w-52 "></div>
                                <div className="md:hidden mr-2">
                                    <Button onClick={() => (setVisible(!visible))} type="primary" icon={<MenuOutlined />} size="small" />
                                </div>
                                <div>Name of Boutique</div>
                            </div>

                            <div className="flex items-center">
                                <div className="mr-3">
                                    <Tooltip title="You have 2 new notifications">
                                        <Badge dot offset={[-2, 2]}>
                                            <BellFilled className="" />
                                        </Badge>
                                    </Tooltip>
                                </div>
                                <div>Boutique Name</div>
                            </div>
                        </div>

                        <Content className="w-screen md:pl-56 pl-4 pt-24 pr-4 pb-6 bg-mainbg ">
                            {children}
                        </Content>

                    </Layout>
                </div>
            </Layout>

            {/* Drawer for small screens */}
            <Drawer
                placement="left"
                closable={false}
                onClose={() => (setVisible(!visible))}
                visible={visible}
                key="left"
                theme="dark"

            >
                <div className="bg-black">
                    <img className="h-24 w-full" src="/images/logo.png" alt="brand logo" />
                </div>
                <Menu style={{ height: "100vh" }} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<MdDashboard className="h-4 w-4" />}>
                        Dashboard
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<BsBoxSeam className="h-4 w-4" />} title="Manage boutique">
                        <Menu.Item key="2">1. Layout</Menu.Item>
                        <Menu.Item key="3">2. Products</Menu.Item>
                        <Menu.Item key="4">3. Orders</Menu.Item>
                        <Menu.Item key="5">4. Marketing</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6" icon={<BsEnvelopeFill className="h-4 w-4" />}>
                        Messaging
                    </Menu.Item>
                    <Menu.Item key="7" icon={<RiUser3Fill className="h-4 w-4" />}>
                        Users
                    </Menu.Item>
                    <Menu.Item key="8" icon={<GiHanger className="h-4 w-4" />}>
                        Size Chart
                    </Menu.Item>
                    <Menu.Item key="9" icon={<VscFeedback className="h-4 w-4" />}>
                        Reviews
                    </Menu.Item>
                    <Menu.Item key="10" icon={<MdVerified className="h-4 w-4" />}>
                        Verification
                    </Menu.Item>
                </Menu>
            </Drawer>

        </div>
    )
}

export default NestedLayout
