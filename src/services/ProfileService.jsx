import axios from "axios";
import { API_PROFILE } from "./constant";

export default class ProfileService {
  getProfile = async (id, token) => {
    return await axios.get(API_PROFILE + "/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
}
