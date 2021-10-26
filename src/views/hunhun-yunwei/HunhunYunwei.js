import { Layout } from "antd";
import React from "react";
import { Route, Switch, Redirect } from "react-router";
import SideMenu from "../../components/SideMenu";
import TopHeader from "../../components/TopHeader";
import Home from "../hunhun-yunwei/home/Home"
import "./HunhunYunwei.css"

const { Content } = Layout;

export default function HunhunYunwei() {
  return (
    <Layout>
      <SideMenu>111</SideMenu>

      <Layout className="site-layout">
        <TopHeader></TopHeader>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {/* <Switch>
            <Route path="/home" component={Home} />
            <Redirect from="/" to="/home" exact />
          </Switch> */}
        </Content>
      </Layout>
    </Layout>
  );
}
