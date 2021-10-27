import { Layout } from "antd";
import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import TopHeader from "../../components/TopHeader";
import Home from "../hunhun-yunwei/home/Home"
import Yunwei from "./yunwei/Yunwei";
import "./HunhunYunwei.css"
import YunweiAcl from "./yunwei/YunweiAcl";

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
          <HashRouter>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/yunwei" component={Yunwei} />
              <Route path="/yunweiacl" component={YunweiAcl} />
              <Redirect from="/" to="/home" exact />
            </Switch>
          </HashRouter>
        </Content>
      </Layout>
    </Layout>
  );
}
