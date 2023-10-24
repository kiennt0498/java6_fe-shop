import React, { Component } from "react";
import { connect } from "react-redux";
import ListCartItem from "./ListCartItem";
import withRouter from "../../helpers/withRouter";
import ProfileService from "../../services/ProfileService";
import { addOrder } from "../../redux/actions/actionOrder";

export class CartItem extends Component {
  onBuy = async () => {
    const username = localStorage.getItem("username");
    if (username == null) {
      this.props.router.navigate("/dangnhap");
      return;
    }

    const pf = await ProfileService.getProfile(username);

    const order = {
      address: pf.data.address,
      cusId: pf.data.id,
      orderDetails: this.props.cartitem,
    };
    console.log(order);
    this.props.addOrder(order);
  };
  render() {
    const { cartitem } = this.props;
    return (
      <>
        <ListCartItem cartitem={cartitem} onBuy={this.onBuy}></ListCartItem>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cartitem: state.CartItemReducer.cartitem,
});

const mapDispatchToProps = {
  addOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CartItem));
