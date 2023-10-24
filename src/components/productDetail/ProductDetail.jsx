import { Button, Col, Divider, InputNumber, Row } from "antd";
import React, { Component } from "react";

export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1, // Giá trị mặc định của input
    };
  }

  handleIncrease = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  handleDecrease = () => {
    if (this.state.quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }
  };

  render() {
    console.log(this.state.quantity);
    return (
      <>
        <div className="title">
          <h1>Tổ Yến Thô Loại Kinh Tế</h1>
        </div>
        <div className="quytrinh">
          <ul>
            <li>
              <h4>Đối tượng sử dụng:</h4> Sản phẩm giàu dinh dưỡng, phù hợp với
              khách hàng có nhu cầu cải thiện sức khỏe. Đặc biệt là trẻ em bị
              nhẹ cân, người già, người mới ốm dậy hoặc phụ nữ cần chăm sóc sức
              khỏe.
            </li>
            <li>
              <h4>Khối lượng:</h4> 100gr & 50gr
            </li>
            <li>
              <h4>Số lượng:</h4> 12 – 14 tổ/100gr
            </li>
          </ul>
        </div>
        <div className="CartItem">
          <Divider>Đặt mua tổ yến ngay!</Divider>
          <h1
            style={{
              color: "red",
              backgroundColor: "rgb(255,220,118)",
              height: "5%",
              borderRadius: "4px",
              padding: "2%",
            }}
          >
            2,300,000 ₫
          </h1>
          <Row md={24}>
            <Col md={9}>
              <Button
                style={{ width: "50px", marginRight: "5px" }}
                onClick={this.handleIncrease} // Gọi hàm khi nút "+" được bấm
              >
                +
              </Button>
              <InputNumber
                name="quantity"
                min={1}
                value={this.state.quantity} // Gán giá trị của state vào input
              ></InputNumber>
              <Button
                style={{ width: "50px", marginLeft: "5px" }}
                onClick={this.handleDecrease} // Gọi hàm khi nút "-" được bấm
              >
                -
              </Button>
            </Col>
            <Col md={1}></Col>
            <Col md={13}>
              <Button style={{ backgroundColor: "red", color: "white" }}>
                Thêm vào giỏ hàng
              </Button>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ProductDetail;
