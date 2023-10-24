import { CARTITEM_CLEAR, CARTITEM_SET } from "../actions/actionType";

const initialState = {
  cartitem: [],
};
const updateCartItemQuantity = (cartitem, updatedItem) => {
  return cartitem.map((item) => {
    if (item.product.id === updatedItem.product.id) {
      return { ...item, quantity: item.quantity + updatedItem.quantity };
    }
    return item;
  });
};

const CartItemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CARTITEM_SET:
      const existingItem = state.cartitem.find(
        (item) => item.product.id === payload.product.id
      );

      if (existingItem) {
        const updatedCartitem = updateCartItemQuantity(
          state.cartitem,
          existingItem
        );
        return { ...state, cartitem: updatedCartitem };
      } else {
        return { ...state, cartitem: [payload, ...state.cartitem] };
      }

    case CARTITEM_CLEAR:
      return { cartitem: [] };
    default:
      return state;
  }
};
export default CartItemReducer;
