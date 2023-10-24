import React, { Component } from "react";
import { Col, Form, Image, Input, Row } from "antd";

class FormDisabledDemo extends Component {
  render() {
    return (
      <div>
        <Form layout="vertical" className="form" size="middle">
          <Row md={24}>
            <Col md={10}>
              <Image
                style={{ width: "100%" }}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>
            <Col md={1}></Col>
            <Col md={13}>
              <Form.Item label="Họ và tên" name="fullname">
                <Input></Input>
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input></Input>
              </Form.Item>
              <Form.Item label="Điện thoại" name="phone">
                <Input></Input>
              </Form.Item>
              <Form.Item label="Địa chỉ" name="address">
                <Input></Input>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default FormDisabledDemo;
