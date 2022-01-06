import { ADD_NOTE, DELETE_NOTE, LOGIN, LOGOUT, UPDATE_NOTE } from "./types";

export const login = (payload) => {
  return {
    type: LOGIN,
    payload: payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
export const addNote = (payload) => {
  return {
    type: ADD_NOTE,
    payload: payload,
  };
};
export const deleteNote = (payload) => {
  return {
    type: DELETE_NOTE,
    payload: payload,
  };
};
export const updateNote = (payload) => {
  return {
    type: UPDATE_NOTE,
    payload: payload,
  };
};
