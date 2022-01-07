import { UserOutlined } from "@ant-design/icons";
import { Button, Col, Collapse, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import { connect } from "react-redux";
import { addNote, updateNote } from "../redux/actions";
import { Store } from "../redux/store";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (data) => dispatch(addNote(data)),
    updatedNote: (data) => dispatch(updateNote(data)),
  };
};

const mapStateToProps = (state) => {
  return {};
};
const AddNote = ({ addNote, state, open }) => {
  const [data, setData] = useState(() => {
    if (state) {
      return {
        title: state.title,
        description: state.description,
        id: state.id,
      };
    }
    return {
      title: "",
      description: "",
      id: -1,
    };
  });
  const onClickAdd = () => {
    console.log("inside onclick");
    let state = [...Store.getState().notesReducer.allNotes];
    let id = state[state.length - 1].id;
    let d = { ...data, id: id };
    state.push(d);
    console.log("state new: ", state);
    addNote(state);
  };
  const onClickUpdate = () => {
    let state = [...Store.getState().notesReducer.allNotes];
    let objIndex = state.findIndex((obj) => obj.id === data.id);

    state = [...state.slice(0, objIndex), data, ...state.slice(objIndex + 1)];

    addNote(state);
  };
  return (
    <div style={style.parent}>
      <Collapse
        bordered={false}
        onChange={callback}
        style={style.collapse}
        defaultActiveKey={open ? "1" : null}
      >
        <Panel
          header={
            <Row style={{ width: "100%" }}>
              <Col flex={4}>
                <Input
                  size="large"
                  placeholder="start a new notie:)"
                  prefix={<UserOutlined />}
                  defaultValue={state ? state.title : null}
                  onChange={(v) => setData({ ...data, title: v.target.value })}
                />
              </Col>
              <Col flex={1}>
                <Button
                  style={{ width: "100%", height: "100%" }}
                  onClick={state ? onClickUpdate : onClickAdd}
                >
                  submit
                </Button>
              </Col>
            </Row>
          }
          key="1"
          showArrow={false}
          // collapsible={open?"header":null}
        >
          <TextArea
            rows={4}
            placeholder="more explanations..."
            onChange={(v) => setData({ ...data, description: v.target.value })}
            defaultValue={state ? state.description : null}
          />{" "}
        </Panel>
      </Collapse>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
const style = {
  collapse: {
    width: "100%",
    maxWidth: 900,
  },

  parent: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
