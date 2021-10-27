import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Alert,
} from 'antd';

export default function Yunwei() {

    const onFinish = (values) => {
    //   console.log(
    //     "object network INSIDE_" + values["内网IP地址"] + "_" + values["内网端口"] 
    //   );
        console.log(values["公网IP地址"]);
      document.getElementById("command1").innerHTML =
        "object network INSIDE_" +
        values["内网IP地址"] +
        "_" +
        values["内网端口"];

        document.getElementById("command2").innerHTML =
          "&nbsp&nbsp host &nbsp" + values["内网IP地址"];
        document.getElementById("command3").innerHTML =
          "&nbsp&nbsp nat (any,outside) static OUTSIDE_" +
          values["公网IP地址"] +
          " service tcp " +
          values["内网端口"] +
          "&nbsp" +
          values["公网端口"];

    };
    return (
      <>
        <Form
          name="basic"
          onFinish={onFinish}
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="公网IP地址"
            name="公网IP地址"
            rules={[{ required: true, message: "请输入公网IP地址!" }]}
          >
            <Input placeholder="公网IP地址" />
          </Form.Item>

          <Form.Item
            label="公网端口"
            name="公网端口"
            rules={[{ required: true, message: "请输入公网端口！" }]}
          >
            <Input placeholder="公网端口" />
          </Form.Item>

          <Form.Item
            label="内网IP地址"
            name="内网IP地址"
            rules={[{ required: true, message: "请输入内网IP地址!" }]}
          >
            <Input placeholder="内网IP地址" />
          </Form.Item>

          <Form.Item
            label="内网端口"
            name="内网端口"
            rules={[{ required: true, message: "请输入内网!" }]}
          >
            <Input placeholder="内网端口" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Card title="自动生成的命令">
            <p id="command1"></p>
            <p id="command2"></p>
            <p id="command3"></p>
          </Card>
        </Form>
      </>
    );
}
