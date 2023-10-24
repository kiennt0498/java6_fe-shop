import { combineReducers } from "redux";
import CartItemReducer from "./reducers/CartItemReducer";
import ProductSpReducer from "./reducers/ProductSpReducer";
import AccountReducer from "./reducers/AccountReducer";
import ProfileReducer from "./reducers/ProfileReducer";
import OrderSPReducer from "./reducers/OrderSPReducer";
const rootReducer = combineReducers({
  CartItemReducer,
  ProductSpReducer,
  AccountReducer,
  ProfileReducer,
  OrderSPReducer,
});

export default rootReducer;
