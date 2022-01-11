import { Card, Avatar, message } from "antd";
import {
  DeleteFilled,
  EditFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import confirm from "antd/lib/modal/confirm";
import { EditNoteModal } from "../components/mainPage/content/editNoteModal";
import { useState } from "react";
import { deleteNotes as proccessDeleteNote } from "../controller/notesController";
import { connect } from "react-redux";
import { deleteNote } from "../redux/actions";
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

  return (
    <div>
      <Card
        cover={src ? <img alt="example" src={src} /> : null}
        actions={[
          <EditFilled onClick={() => setIsModalVisible(true)} key="edit" />,
          <DeleteFilled
            onClick={() => showDeleteConfirm(id, deleteNote)}
            key="delete"
          />,
        ]}
        style={style.card}
      >
        <Meta
          avatar={
            <Avatar src={avatar ?? "https://joeschmoe.io/api/v1/random"} />
          }
          title={title ?? "Card title"}
          description={description}
        />
      </Card>
      <EditNoteModal
        visible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        state={{ title: title, description: description, id: id }}
      />
    </div>
  );
};
export const Note = connect(mapStateToProps, mapDispatchToProps)(NoteWidget);

function showDeleteConfirm(id, deleteNote) {
  confirm({
    title: "Are you sure delete this task?",
    icon: <ExclamationCircleOutlined />,
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk: async () => {
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
    boxShadow: "2px 4px 12px 5px rgba(208, 216, 243, 0.6)",
  },
};
