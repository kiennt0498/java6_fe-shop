import {
  ORDERSDETAIL_SET,
  ORDERS_DEL,
  ORDERS_SET,
} from "../actions/actionType";

const initialState = {
  order: {},
  orders: [],
  orderDetail: [],
};

const OrderSPReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ORDERS_SET:
      return { ...state, orders: payload };
    case ORDERS_DEL:
      const updateOrder = state.orders.filter((item) => item.id !== payload);

      return { ...state, orders: updateOrder };

    case ORDERSDETAIL_SET:
      return { ...state, orderDetail: payload };

    default:
      return state;
  }
};

export default OrderSPReducer;
