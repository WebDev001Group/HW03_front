import { List, message } from "antd";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNotes, middleware } from "../../../controller/notesController";
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
  const navigate = useNavigate()
  useEffect(() => {
    console.log("nnnotes: ", notes);
    middleware(navigate).then(() =>
      getNotes()
        .then((result) => {
          console.log("hell1");
          // console.log("result: ", result);
          if (result.status) {
            console.log("====================================");
            console.log(".then: ", result);
            console.log("====================================");
            addNote(result.notes);
            // setNoteList(result.notes);
          } else {
            message.error(result.message);
          }
        })
        .catch((e) => {
          console.log("hello:, ", e);
          message.error(e);
        })
    );
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
        console.log("in 2: ");
        return (
          <List.Item>
            <Note
              title={item.title}
              description={item.description}
              src={"https://joeschmoe.io/api/v1/random"}
              id={item.noteId}
              key={item.id}
            />
          </List.Item>
        );
      }}
    />
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(NoteGrid);
