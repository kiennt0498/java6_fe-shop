import axios from "axios";
import { API_ACCOUNT } from "./constant";

export default class AccountSPService {
  createAccount = async (account) => {
    return await axios.post(API_ACCOUNT, account);
  };
}
