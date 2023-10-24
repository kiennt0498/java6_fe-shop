import React, { Component } from "react";
import CarouseHome from "./CarouseHome";
import { Button, Card, Col, Divider, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { AiOutlineArrowRight } from "react-icons/ai";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/actions/actionCartItem";

export class HomePage extends Component {
  addItem = (data) => {
    this.props.addCartItem(data);
  };
  render() {
    return (
      <>
        <CarouseHome />

        <Divider style={{ fontSize: "24px" }}>
          <h1 style={{ color: "rgb(74,93,67)" }}>Sản Phẩm Cung Cấp</h1>
        </Divider>
        <Row gutter={24} style={{ textAlign: "center" }}>
          <Col span={6}>
            <a href="#">
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://yentunhien.vn/wp-content/uploads/2022/06/danh-sach-san-pham-to-yen-01.jpg"
                  />
                }
              >
                <Meta title="Tổ yến tinh chế" />
              </Card>
            </a>
          </Col>
          <Col span={6}>
            <a href="#">
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://yentunhien.vn/wp-content/uploads/2022/06/danh-sach-san-pham-to-yen-0202.jpg"
                  />
                }
              >
                <Meta title="Tổ yến thô" />
              </Card>
            </a>
          </Col>
          <Col span={6}>
            <a href="">
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://yentunhien.vn/wp-content/uploads/2022/06/danh-sach-san-pham-to-yen-03.jpg"
                  />
                }
              >
                <Meta title="Yến chưng sẵn" />
              </Card>
            </a>
          </Col>
          <Col span={6}>
            <a href="">
              {" "}
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://yentunhien.vn/wp-content/uploads/2022/06/danh-sach-san-pham-to-yen-04.jpg"
                  />
                }
              >
                <Meta title="Yến tươi" />
              </Card>
            </a>
          </Col>
        </Row>
        <Divider style={{ fontSize: "24px" }}>
          <h1 style={{ color: "rgb(74,93,67)" }}>Chất Lượng Tổ Yến</h1>
        </Divider>
        <Row gutter={16}>
          <Col span={8}>
            <Card bordered={false}>
              <Row>
                <Col md={1}>
                  <Divider
                    type="vertical"
                    style={{ height: "100%", color: "rgb(255,220,118)" }}
                  />
                </Col>
                <Col md={23}>
                  <h3>
                    Trong tổ yến nguyên chất có chứa hơn 18 loại acid amin cùng
                    nhiều khoáng chất quan trọng cho sức khỏe mà cơ thể con
                    người không tự tổng hợp được.
                  </h3>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <Row>
                <Col md={1}>
                  <Divider
                    type="vertical"
                    style={{ height: "100%", color: "rgb(255,220,118)" }}
                  />
                </Col>
                <Col md={23}>
                  <h3>
                    Tổ yến chỉ có giá trị về dinh dưỡng chứ chưa có một nghiên
                    cứu chính xác nào chứng minh chúng có tác dụng chữa trị ung
                    thư hay HIV/AIDS.
                  </h3>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <Row>
                <Col md={1}>
                  <Divider
                    type="vertical"
                    style={{ height: "100%", color: "rgb(255,220,118)" }}
                  />
                </Col>
                <Col md={23}>
                  <h3>
                    Ngoài tác dụng bồi bổ sức khỏe thì tổ yến còn hỗ trợ tăng
                    cường chức năng tim mạch, kích thích tiêu hóa, làm đẹp da
                    cũng như hỗ trợ hồi phục vết thương.
                  </h3>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Divider orientation="left">
          <h1>Sản Phẩm Nổi Bật</h1>
        </Divider>
        <Row gutter={24}>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cartitem: state.CartItemReducer.cartitem,
});

const mapDispatchToProps = {
  addCartItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
