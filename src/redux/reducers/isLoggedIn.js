import { LOGIN, LOGOUT } from "../types";

const INITIAL_STATE = {
    isLoggedIn:false
};

const loggedInReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...(action.payload),
        isLoggedIn:true

      };

    case LOGOUT:
      return {
        isLoggedIn:false
      };

    default:
      return state;
  }
};

export default loggedInReducer;
