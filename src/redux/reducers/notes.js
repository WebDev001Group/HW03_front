import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../types";

const INITIAL_STATE = {
  allNotes: [],
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...action.payload,
      };

    case DELETE_NOTE:
      return {
        ...action.payload,
      };
    case UPDATE_NOTE:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default notesReducer;
