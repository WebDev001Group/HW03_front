import { List, message } from "antd";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getNotes } from "../../../controller/notesController";
import { addNote, deleteNote, updateNote } from "../../../redux/actions";

import { Note } from "../../../widgets/note";

const mapStateToProps = (state) => {
  // console.log("state: ",state)
  return {
    notes: state.notesReducer.allNotes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (noteData) => dispatch(deleteNote(noteData)),
    addNote: (noteData) => dispatch(addNote(noteData)),
    updateNote: (noteData) => dispatch(updateNote(noteData)),
  };
};
const NoteGrid = ({ notes, addNote, deleteNote, updateNote }) => {
  useEffect(() => {
    console.log("nnnotes: ",notes);
    getNotes().then((result) => {
      // console.log("result: ", result);
      if (result.status) {
        addNote(result.notes);
        // setNoteList(result.notes);
      } else {
        message.error(result.message);
      }
    });
  }, []);
  // useEffect(() => {}, [JSON.stringify(Store.getState().notesReducer.allnotes)]);
  console.log("in 1");
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      dataSource={notes}
      renderItem={(item) => {
        console.log("in 2: " );
        return (
          <List.Item >
            <Note
              title={item.title}
              description={item.description}
              src={"https://joeschmoe.io/api/v1/random"}
              id={item.id}
              key={item.id}
              
            />
          </List.Item>
        );
      }}
    />
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(NoteGrid);
