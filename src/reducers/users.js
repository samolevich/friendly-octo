import { GET_USERS } from "../constants";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};

export default usersReducer;
