const initialState = {
  productsp: [],
};
export const ProductSpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "PRODUCTSP_SET":
      return { ...state, productsp: payload };
    default:
      return state;
  }
};
export default ProductSpReducer;
