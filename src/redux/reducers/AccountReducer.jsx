const initialState = {
  account: {},
};
export const AccountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ACCOUNT_SET":
      return { ...state, account: payload };
    default:
      return state;
  }
};
export default AccountReducer;
