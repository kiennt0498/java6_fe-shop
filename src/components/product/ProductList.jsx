import { Button, Card, Col, Divider, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React, { Component } from "react";
import "./Liststyle.scss";
import ProductSPService from "../../services/ProductSPService";

export class ProductList extends Component {
  render() {
    const { productsp } = this.props;

    return (
      <>
        <Row gutter={16}>
          {productsp &&
            productsp.map((item) => (
              <Col key={item.id} span={8} style={{ marginBottom: "20px" }}>
                <Card
                  hoverable
                  style={{ width: "300px" }}
                  cover={
                    <img
                      alt="example"
                      src={ProductSPService.getProductImageUrl(
                        item.image.fileName
                      )}
                    />
                  }
                >
                  <div>
                    <h1 style={{ marginTop: "0", marginBottom: "0" }}>
                      {item.name}
                    </h1>
                    <label style={{ color: "red" }}>{item.price}</label>
                  </div>

                  <Button onClick={() => this.props.onAddItem(item)}>
                    Thêm vào giỏ hàng
                  </Button>
                </Card>
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default ProductList;
