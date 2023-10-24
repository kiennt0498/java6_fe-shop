import React, { Component } from "react";

import withRouter from "../../helpers/withRouter";
import OrderList from "./OrderList";
import { connect } from "react-redux";
import {
  getListOrder,
  getListOrderDetail,
} from "../../redux/actions/actionOrder";
import ProfileService from "../../services/ProfileService";

export class ListOrder extends Component {
  componentDidMount = async () => {
    const username = localStorage.getItem("username");

    if (username) {
      this.props.router.navigate("/dangnhap");
      return;
    }
    const pf = await ProfileService.getProfile(username);
    this.props.getListOrder(pf.id);
  };
  onGoDetail = (data) => {
    this.props.router.navigate(`/order/orderdetail/${data.id}`);
  };
  render() {
    const { navigate } = this.props.router;
    const { orders } = this.props;

    return (
      <>
        <OrderList od={orders} onGoDetail={this.onGoDetail}></OrderList>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  orders: state.OrderSPReducer.orders,
});

const mapDispatchToProps = {
  getListOrder,
  getListOrderDetail,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListOrder));
