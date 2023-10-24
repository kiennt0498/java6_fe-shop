import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Form, Input } from "antd";
import { connect } from "react-redux";
import { onLogin } from "../../redux/actions/actionAccount";
import "./LoginStype.scss";
import { Link } from "react-router-dom";

const Login = (props) => {
  const onFinish = (values) => {
    props.onLogin(values);
  };
  return (
    <div className="login-form-container">
      <div className="form-title">Đăng nhập</div>
      <Divider></Divider>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Link to="/dangky" className="login-form-forgot">
            <label htmlFor="">Quên mật khẩu</label>
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Đăng nhập
          </Button>
          Hoặc{" "}
          <Link to="/dangky">
            <label htmlFor="">Đăng ký</label>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  onLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
