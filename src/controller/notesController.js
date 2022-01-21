import axios from "axios";
import { Store } from "../redux/store";
import { errorLogger } from "./sharedFunctions";
import { refreshToken as refreshTokenFunction } from "../redux/actions";



export const getNotes = async () => {
  let accessToken = Store.getState().loggedInReducer.accessToken;
  try {
    let response = await axios.get("http://localhost:8000/notes/all", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("status: ", response.status, response.statusText);
    return { status: true, message: "ok", notes: response.data.notes };
  } catch (e) {
    errorLogger("getNotes error: ", e);
    return {
      status: false,
      message: e.response.data.message,
    };
  }
};
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export const middleware = async (navigate) => {
  
  const accToken = Store.getState().loggedInReducer.accessToken;
  const refToken = Store.getState().loggedInReducer.refreshToken;
  const decodedAccess = parseJwt(accToken);
  // const decodedRefresh = parseJwt(refToken);
  console.log("decoede acc: ", decodedAccess);

  if (decodedAccess.exp * 1000 < Date.now()) {
    console.log("expired")
    try {
      await refreshToken(accToken, refToken);
    } catch (e) {
      console.log("error in middleware access: ", e);
      navigate("/");
    }
  }
};
const refreshToken = async (accessToken, refreshToken) => {
  let response = await axios.post("http://localhost:8000/auth/refresh", {
    accessToken: accessToken,
    refreshToken: refreshToken,
  });
  //set to redux
  console.log("res data: ", response.data);
  Store.dispatch(refreshTokenFunction(response.data));
};
export const addNotes = async (note) => {
  let accessToken = Store.getState().loggedInReducer.accessToken;
  try {
    let response = await axios.post(
      "http://localhost:8000/notes/new",
      {
        ...note,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    let regex = /^the note id is \d+$/;
    const id = response.data.message.match(regex);
    return {
      status: true,
      message: "ok",
      notes: [
        ...Store.getState().notesReducer.allNotes,
        { title: note.title, description: note.description, noteId: id },
      ],
    };
  } catch (e) {
    errorLogger("addNotes error: ", e);
    return {
      status: false,
      message: e.response.data.message,
    };
  }
};
export const deleteNotes = async (id) => {
  let accessToken = Store.getState().loggedInReducer.accessToken;
  try {
    await axios.delete(`http://localhost:8000/notes/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    let allNotes = [...Store.getState().notesReducer.allNotes];
    allNotes.splice(
      allNotes.findIndex((o) => o.noteId === id),
      1
    );
    return {
      status: true,
      message: "deleted successfuly",
      notes: allNotes,
    };
  } catch (e) {
    errorLogger("deleteNotes error: ", e);
    return {
      status: false,
      message: e.response.data.message,
    };
  }
};
export const updateNotes = async (note) => {
  console.log("====================================");
  console.log("note: ", note);
  console.log("====================================");
  let accessToken = Store.getState().loggedInReducer.accessToken;
  let state = [...Store.getState().notesReducer.allNotes];
  try {
    await axios.put(
      `http://localhost:8000/notes/${note.noteId}`,
      {
        ...note,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    let objIndex = state.findIndex((obj) => obj.noteId === note.noteId);

    state = [...state.slice(0, objIndex), note, ...state.slice(objIndex + 1)];
    return {
      status: true,
      message: "ok",
      notes: state,
    };
  } catch (e) {
    console.log("hey");
    errorLogger("deleteNotes error: ", e);
    return {
      status: false,
      message: e.response.data.message,
    };
  }
};
