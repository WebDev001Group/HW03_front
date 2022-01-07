import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../types";

const INITIAL_STATE = {
  allNotes: [],
};

const notesReducer = (state = INITIAL_STATE, action) => {
  // if(action.type==ADD_NOTE){
    
  //   console.log("notesreducer: " ,action.type , action.payload)
  // }
  
  switch (action.type) {
    case ADD_NOTE:
      return {
        allNotes: action.payload,
      };

    case DELETE_NOTE:
      return {
        allNotes: action.payload,
      };
    case UPDATE_NOTE:
      return {
        allNotes: action.payload,
      };
    default:
      return state;
  }
};

export default notesReducer;
