import { Card, Avatar, message, Row, Space, Col } from "antd";
import {
  DeleteFilled,
  EditFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import confirm from "antd/lib/modal/confirm";
import { EditNoteModal } from "../components/mainPage/content/editNoteModal";
import { useState } from "react";
import { deleteNotes as proccessDeleteNote, middleware } from "../controller/notesController";
import { connect } from "react-redux";
import { deleteNote } from "../redux/actions";
import Text from "antd/lib/typography/Text";
import { useNavigate } from "react-router-dom";
// import { deleteNote } from "../redux/actions";
const { Meta } = Card;
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (data) => dispatch(deleteNote(data)),
  };
};
const NoteWidget = ({ src, avatar, title, description, id, deleteNote }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const backgroundColors = [
    "#ffa4a2",
    "#ff94c2",
    "#ee98fb",
    "#c7a4ff",
    "#9be7ff",
    "#82e9de",
    "#b2fab4",
    "#ffffa8",
    "#ffe97d",
    "#ffbb93",
  ];
  const fonts = [ 23,  25, 27];
  let randomColor = getRandomInt(backgroundColors.length);
  let randomFont = getRandomInt(fonts.length);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const navigate = useNavigate()
  return (
    <div style={style.parent}>
      <Card
        bordered={false}
        style={{
          ...style.card,
          backgroundColor: backgroundColors[randomColor],
        }}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Meta
            title={
              <Text style={{ fontSize:fonts[randomFont] }}>{title ?? "Card title"}</Text>
            }
            description={<Text style={{ fontSize: 12 ,color:"#1b1b1b" , fontWeight:"bold"}}>{description}</Text>}
            // description={description}
          />
          <Row justify="space-around">
            <Col style={style.rowDiv}>
              <EditFilled
                style={style.icon}
                onClick={() => setIsModalVisible(true)}
                key="edit"
              />
            </Col>

            <Col style={style.rowDiv}>
              <DeleteFilled
                style={style.icon}
                onClick={() => showDeleteConfirm(id, deleteNote,  navigate)}
                key="delete"
              />
            </Col>
          </Row>
        </Space>
      </Card>
      <EditNoteModal
        visible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        state={{ title: title, description: description, noteId: id }}
      />
    </div>
  );
};
export const Note = connect(mapStateToProps, mapDispatchToProps)(NoteWidget);

function showDeleteConfirm(id, deleteNote, navigate) {
  
  confirm({
    title: "Are you sure delete this task?",
    icon: <ExclamationCircleOutlined />,
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk: async () => {
      await middleware(navigate)
      let result = await proccessDeleteNote(id);
      if (result.status) {
        deleteNote(result.notes);
      } else {
        message.error(result.message);
      }
    },
    onCancel() {
      console.log("Cancel");
    },
  });
}
const style = {
  card: {
    borderRadius: 5,
    padding: 0,
  },
  parent: {
    padding: 0,
    margin: 0,
  },
  icon: {
    fontSize: 20,
    // backgroundColor: "white",
    // borderRadius: 100,
    padding: 5,
  },
  rowDiv: {},
  //  { flex: 1, alignItems: "center", justifyContent: "center"  },
};
