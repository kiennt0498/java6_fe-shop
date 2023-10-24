import axios from "axios";
import { API_ORDER } from "./constant";

export default class OrderSPService {
  getListOrder = async (id) => {
    return await axios.get(API_ORDER + "/" + id);
  };
  getListOrderDetail = async (id) => {
    return await axios.get(API_ORDER + "/odd/" + id);
  };
  createOrder = async (order) => {
    return await axios.post(API_ORDER, order);
  };
}
