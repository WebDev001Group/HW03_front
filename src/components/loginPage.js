import {Form, Button, Card, Input, Row } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="App">
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
      >
        <Card>
          <Demo />
        </Card>
      </Row>
    </div>
  );
};
const   Demo = () => {
  const [type, setType] = useState(true);
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      {type ? (
        <Form.Item
          label="Reapeat"
          name="r_password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
      ) : null}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
      

        <Button type="primary" htmlType="submit" onClick={()=> navigate("/notes") }>
          Submit
        </Button>
      </Form.Item>
      <Button onClick={() => setType(!type)}>
        {!type ? "go to sign in" : "go to log in"}
      </Button>
    </Form>
  );
};
