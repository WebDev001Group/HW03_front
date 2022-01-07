import { Store } from "../redux/store";

export const getNotes = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let notes = data;
  return { status: true, message: "ok", notes: notes };
};
export const addNote = () => {};
export const deleteNotes = (id) => {
  let allNotes = [...Store.getState().notesReducer.allNotes];
  allNotes.splice(
    allNotes.findIndex((o) => o.id === id),
    1
  );
  //make api call
  return {
    status: true,
    message: "ok",
    notes: allNotes,
  };
};
export const updateNotes = () => {};
const data = [
  {
    title: "Basic",
    description: "1 GB of space",
    id: 0,
  },
  {
    title: "Premium",
    description:
      "5 GB of space 5 GB of space 5 GB of space 5 GB of space 5 GB of space 5 GB of space 5 GB of space 5 GB of space5 GB of space",
    id: 1,
  },
  {
    title: "Enterprise",
    description: "Unlimited space",
    id: 2,
  },
  {
    title: "Enterprise",
    description: "Unlimited space",
    id: 3,
  },
  {
    title: "Enterprise",
    description: "Unlimited space",
    id: 4,
  },
];
