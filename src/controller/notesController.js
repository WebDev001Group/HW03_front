import { Store } from "../redux/store";
import { Data } from "./texts";

export const getNotes = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let notes = Data;
  return { status: true, message: "ok", notes: notes };
};
export const addNotes = async (note) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  let state = [...Store.getState().notesReducer.allNotes];
  let id = state[state.length - 1].id;
  let d = { ...note, id: id };
  state.push(d);
  return {
    status: true,
    message: "ok",
    notes: state,
  };
};
export const deleteNotes = async (id) => {
  let allNotes = [...Store.getState().notesReducer.allNotes];
  allNotes.splice(
    allNotes.findIndex((o) => o.id === id),
    1
  );
  //make api call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    status: true,
    message: "ok",
    notes: allNotes,
  };
};
export const updateNotes = async (note) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let state = [...Store.getState().notesReducer.allNotes];
  let objIndex = state.findIndex((obj) => obj.id === note.id);

  state = [...state.slice(0, objIndex), note, ...state.slice(objIndex + 1)];
  return {
    status: true,
    message: "ok",
    notes: state,
  };
};
