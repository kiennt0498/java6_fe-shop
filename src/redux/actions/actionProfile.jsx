import { toast } from "react-toastify";

import { PROFILE_SET } from "./actionType";
import ProfileService from "../../services/ProfileService";

const service = new ProfileService();
const token = localStorage.getItem("token");
console.log("token ", token);
export const getProfileUser = (username) => async (dispatch) => {
  try {
    const res = await service.getProfile(username, token);
    if (res && res.status === 200) {
      console.log("res: ", res);
      dispatch({
        type: PROFILE_SET,
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
