import React from "react";
import { Form, Input, Button, Card,  } from "antd";


export default function YunweiAcl() {
  const onFinish = (values) => {
    
    if (values["白名单IP地址"] === 'any') {
      document.getElementById("command1").innerHTML =
        "access-list OUT-IN extended permit " +
        values["协议"] +
        "&nbsp" +
        values["白名单IP地址"] +
        " host " +
        values["内网IP地址"] +
        " eq " +
        values["内网端口"];
    }else {
        document.getElementById("command1").innerHTML =
          "access-list OUT-IN extended permit " +
          values["协议"] +
          "&nbsp" +
          "host " +
          values["白名单IP地址"] +
          " host " +
          values["内网IP地址"] +
          " eq " +
          values["内网端口"];
    }


    
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
          label="白名单IP地址"
          name="白名单IP地址"
          rules={[{ required: true, message: "请输入白名单IP地址!" }]}
        >
          <Input placeholder="白名单IP地址，如果不限制访问，请输入any" />
        </Form.Item>

        <Form.Item
          label="协议"
          name="协议"
          rules={[{ required: true, message: "请输入协议!" }]}
        >
          <Input placeholder="请输入tcp 或者 udp" />
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
