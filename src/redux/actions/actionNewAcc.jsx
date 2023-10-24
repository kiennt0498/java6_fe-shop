import { toast } from "react-toastify";
import AccountSPService from "../../services/AccountSPService";
import { ACCOUNT_SET } from "./actionType";

const service = new AccountSPService();
export const addAcc = (data) => async (dispatch) => {
  try {
    const res = await service.createAccount(data);
    if (res && res.status === 201 && res.data) {
      console.log("res: ", res);
      dispatch({
        type: ACCOUNT_SET,
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
