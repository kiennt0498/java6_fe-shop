import { Col, Divider, Row } from "antd";
import React, { Component } from "react";
import FilterProduct from "./FilterProduct";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { getListProduct } from "../../redux/actions/actionProductSp";
import { addCartItem } from "../../redux/actions/actionCartItem";

export class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedListPrice: [], // State riêng cho lọc theo giá
      checkedListCate: [], // State riêng cho lọc theo loại
    };
  }

  componentDidMount = () => {
    this.props.getListProduct();
  };

  onAddItem = (data) => {
    this.props.addCartItem(data, 1);
  };

  handleCheckboxChangePrice = (checkedValues) => {
    this.setState({ checkedListPrice: checkedValues });
  };

  handleCheckboxChangeCate = (checkedValues) => {
    this.setState({ checkedListCate: checkedValues });
  };

  render() {
    const { productsp } = this.props;

    return (
      <>
        <Divider>
          <h1>Danh mục sản phẩm</h1>
        </Divider>
        <Row md={24}>
          <Col md={7}>
            <FilterProduct
              checkedListPrice={this.state.checkedListPrice}
              checkedListCate={this.state.checkedListCate}
              handleCheckboxChangePrice={this.handleCheckboxChangePrice}
              handleCheckboxChangeCate={this.handleCheckboxChangeCate}
            ></FilterProduct>
          </Col>
          <Col md={1}>
            <Divider type="vertical" style={{ height: "100%", width: "1px" }} />
          </Col>
          <Col md={16}>
            <ProductList
              productsp={productsp}
              onAddItem={this.onAddItem}
            ></ProductList>
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  productsp: state.ProductSpReducer.productsp,
});

const mapDispatchToProps = {
  getListProduct,
  addCartItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
