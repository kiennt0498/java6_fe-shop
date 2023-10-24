import React, { Component } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input } from "antd";
import "./LoginStype.scss";
import { AiOutlineMail } from "react-icons/ai";
import { connect } from "react-redux";
import { addAcc } from "../../redux/actions/actionNewAcc";

class Register extends Component {
  constructor(props) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
  }

  onFinish(values) {
    this.props.addAcc(values);
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="form-title">Đăng ký</div>
        <Divider></Divider>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
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
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<AiOutlineMail className="site-form-item-icon" />}
              type="email"
              placeholder="Email"
            ></Input>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addAcc,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
