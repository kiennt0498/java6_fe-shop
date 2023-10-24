import axios from "axios";
import { API_PRODUCT } from "./constant";
export default class ProductSPService {
  getList = async (token) => {
    return await axios.get(API_PRODUCT);
  };

  getItem = async (id) => {
    return await axios.get(API_PRODUCT + "/" + id);
  };

  static getProductImageUrl = (fileName) => {
    return API_PRODUCT + "/images/" + fileName;
  };
}
