const initialState = {
  profile: {},
};
export const ProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "PROFILE_SET":
      return { ...state, profile: payload };
    default:
      return state;
  }
};
export default ProfileReducer;
