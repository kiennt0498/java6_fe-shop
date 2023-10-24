import { toast } from "react-toastify";
import LoginSPService from "../../services/LoginSPService";
import { ACCOUNT_SET } from "./actionType";

const service = new LoginSPService();
export const onLogin = (account) => async (dispatch) => {
  try {
    const res = await service.login(account);
    if (res && res.status === 200) {
      console.log("res: ", res);
      dispatch({
        type: ACCOUNT_SET,
        payload: res.data,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
    }
  } catch (error) {
    console.log(error.message);
    toast.error(
      error.response.data ? error.response.data.message : error.message
    );
  }
};
