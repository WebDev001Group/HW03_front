import { LOGIN, LOGOUT, REFRESH_TOKEN } from "../types";

const INITIAL_STATE = {
  isLoggedIn: false,
};

const loggedInReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };

    case LOGOUT:
      return {
        isLoggedIn: false,
      };
    case REFRESH_TOKEN:
      console.log("inside")
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default loggedInReducer;
