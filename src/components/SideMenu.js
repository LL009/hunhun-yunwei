import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./index.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

//模拟数据结构
const menulist = [
  {
    key: "/home",
    title: "首页",
    icon: <UserOutlined />,
  },
  {
    key: "/hunhun",
    title: "混混哥",
    icon: <UserOutlined />,
    children: [
      {
        key: "/",
        title: "信用卡",
        icon: <UserOutlined />,
      },
    ],
  },
];

export default function SideMenu() {
  return (
    <Sider trigger={null} collapsible>
      <div className="logo">混混哥系统</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          首页
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <Menu.Item key="6" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
