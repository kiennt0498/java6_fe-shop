import { toast } from "react-toastify";
import ProductSPService from "../../services/ProductSPService";
import { PRODUCTSP_SET } from "./actionType";

const service = new ProductSPService();
export const getListProduct = () => async (dispatch) => {
  try {
    const res = await service.getList();
    if (res && res.status === 200) {
      dispatch({
        type: PRODUCTSP_SET,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error.message);
    toast.error(
      error.response.data ? error.response.data.message : error.message
    );
  }
};
