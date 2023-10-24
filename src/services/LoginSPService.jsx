import axios from "axios";
import { API_LOGIN } from "./constant";

export default class LoginSPService {
  login = async (account) => {
    return await axios.post(API_LOGIN, account);
  };
}
