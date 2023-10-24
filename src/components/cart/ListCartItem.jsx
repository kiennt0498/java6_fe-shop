import Column from "antd/es/table/Column";
import React, { Component } from "react";

import {
  Button,
  Card,
  Col,
  Divider,
  Image,
  Row,
  Space,
  Statistic,
  Table,
} from "antd";
import ProductSPService from "../../services/ProductSPService";

export class ListCartItem extends Component {
  render() {
    const { cartitem } = this.props;

    const totalFunds = cartitem.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
    const totalQuantity = cartitem.reduce(
      (total, item) => total + item.quantity,
      0
    );
    return (
      <>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Funds"
                value={totalFunds}
                precision={2}
                suffix="VND"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total quantity"
                value={totalQuantity}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
              />
            </Card>
          </Col>
        </Row>
        <Divider></Divider>
        {cartitem !== null ? (
          <>
            <Table dataSource={cartitem} rowKey="id">
              <Column
                title="Image"
                key="fileName"
                dataIndex="product.image.fileName"
                align="center"
                width={90}
                render={(_, record) => (
                  <Space size="middle">
                    <Image
                      width="100%"
                      src={ProductSPService.getProductImageUrl(
                        record.product.image.fileName
                      )}
                    />
                  </Space>
                )}
              ></Column>

              <Column
                title="Name"
                key="name"
                dataIndex="product.name"
                align="center"
                render={(_, record) => record.product.name}
              ></Column>

              <Column
                title="Quantity"
                key="quantity"
                dataIndex="quantity"
                align="center"
              ></Column>

              <Column
                title="Price"
                key="price"
                render={(_, record) => record.product.price * record.quantity}
                align="center"
              ></Column>
            </Table>
            <Divider />
            <Button onClick={() => this.props.onBuy()}>Thanh toán</Button>
          </>
        ) : null}
      </>
    );
  }
}

export default ListCartItem;
