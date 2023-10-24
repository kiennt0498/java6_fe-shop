import { toast } from "react-toastify";

import OrderSPService from "../../services/OrderSPService";
import { ORDERSDETAIL_SET, ORDERS_SET } from "./actionType";

const service = new OrderSPService();
export const getListOrder = (id) => async (dispatch) => {
  try {
    const res = await service.getListOrder(id);

    if (res.status === 200) {
      dispatch({
        type: ORDERS_SET,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(
      error.response.data ? error.response.data.message : error.message
    );
  }
};

export const addOrder = (order) => async (dispatch) => {
  console.log(order);
  try {
    const res = await service.createOrder(order);
    console.log(res);
  } catch (error) {
    toast.error(
      error.response.data ? error.response.data.message : error.message
    );
  }
};

export const getListOrderDetail = (id) => async (dispatch) => {
  try {
    const res = await service.getListOrderDetail(id);
    if (res.status === 200) {
      dispatch({
        type: ORDERSDETAIL_SET,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(
      error.response.data ? error.response.data.message : error.message
    );
  }
};
