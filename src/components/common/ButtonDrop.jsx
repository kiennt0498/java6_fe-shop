import { Avatar, Button, Card, Dropdown, Image, Space, Table } from "antd";
import Meta from "antd/es/card/Meta";
import Column from "antd/es/table/Column";
import React, { Component } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductSPService from "../../services/ProductSPService";
import withRouter from "../../helpers/withRouter";

export class ButtonDrop extends Component {
  goCartItem = () => {
    this.props.router.navigate("/giohang");
  };

  render() {
    const { data } = this.props;

    const items = [
      {
        key: "1",
        label: (
          <>
            <Table
              dataSource={data}
              rowKey="id"
              pagination={false}
              showHeader={false}
            >
              <Column
                title="Image"
                key="fileName"
                align="center"
                width={70}
                render={(_, record) => (
                  <Space size="middle">
                    <Image
                      width="100%"
                      src={ProductSPService.getProductImageUrl(
                        record.image.fileName
                      )}
                    />
                  </Space>
                )}
              ></Column>
              <Column
                title="Name"
                key="name"
                dataIndex="name"
                align="center"
              ></Column>
              <Column
                title="Quantity"
                key="price"
                dataIndex="price"
                align="center"
              ></Column>
            </Table>
            <Button
              onClick={this.goCartItem}
              style={{ marginTop: "5px", width: "100%" }}
            >
              Giỏ hàng
            </Button>
          </>
        ),
      },
    ];
    return (
      <>
        <Space direction="vertical">
          <Space wrap>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
            >
              <Button>
                <AiOutlineShoppingCart />
              </Button>
            </Dropdown>
          </Space>
          <Space wrap></Space>
        </Space>
      </>
    );
  }
}

export default withRouter(ButtonDrop);
