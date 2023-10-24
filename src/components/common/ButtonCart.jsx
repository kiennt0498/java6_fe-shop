import React, { Component } from "react";
import { Space, Badge, Avatar } from "antd";
import ButtonDrop from "./ButtonDrop";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/actions/actionCartItem";

class ButtonCart extends Component {
  state = {
    cartitem: [],
  };
  componentDidUpdate = (prevProps) => {
    if (prevProps.cartitem !== this.props.cartitem) {
      this.setState({ ...this.state, cartitem: this.props.cartitem });
    }
  };
  render() {
    const { cartitem } = this.state;
    const products = cartitem.map((item) => item.product);

    return (
      <Space size="middle">
        <Badge count={cartitem ? cartitem.length : 0} showZero>
          <ButtonDrop data={products}></ButtonDrop>
        </Badge>
      </Space>
    );
  }
}

const mapStateToProps = (state) => ({
  cartitem: state.CartItemReducer.cartitem,
});

const mapDispatchToProps = {
  addCartItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCart);
