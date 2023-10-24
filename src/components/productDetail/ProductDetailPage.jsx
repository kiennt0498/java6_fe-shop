import React, { Component } from "react";
import { Card, Col, Divider, Image, Row } from "antd";
import ProductDetail from "./ProductDetail";

export class ProductDetailPage extends Component {
  render() {
    return (
      <>
        <Row>
          <Col md={7}>
            <div style={{ width: "100%" }}>
              <Image
                style={{ width: "100%" }}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
          </Col>
          <Col md={1}></Col>

          <Col md={15}>
            <ProductDetail></ProductDetail>
          </Col>
        </Row>
      </>
    );
  }
}

export default ProductDetailPage;
