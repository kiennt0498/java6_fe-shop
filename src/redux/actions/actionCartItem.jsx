import { CARTITEM_SET } from "./actionType";

export const addCartItem = (item, qt) => (dispatch) => {
  const itemCart = {
    product: item,
    quantity: qt,
  };

  dispatch({
    type: CARTITEM_SET,
    payload: itemCart,
  });
};
