import React, { useEffect } from "react";

import ListOrderDetail from "./ListOrderDetail";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getListOrderDetail } from "../../redux/actions/actionOrder";

const OrderDetail = ({ orderDetail, getListOrderDetail, navigate }) => {
  const { id } = useParams();

  useEffect(() => {
    getListOrderDetail(id);
  }, [id, getListOrderDetail]);
  console.log(orderDetail);
  return (
    <>
      <ListOrderDetail odd={orderDetail} />
    </>
  );
};

const mapStateToProps = (state) => ({
  orderDetail: state.OrderReducer.orderDetail,
});

const mapDispatchToProps = {
  getListOrderDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
