import { Card, Avatar } from "antd";
import {
  DeleteFilled,
  EditFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import confirm from "antd/lib/modal/confirm";
import { EditNoteModal } from "./editNoteModal";
import { useState } from "react";
const { Meta } = Card;
export const Note = ({ src, avatar, title, description }) => {
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
          <DeleteFilled onClick={showDeleteConfirm} key="delete" />,
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
      />
    </div>
  );
};

function showDeleteConfirm() {
  confirm({
    title: "Are you sure delete this task?",
    icon: <ExclamationCircleOutlined />,
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      console.log("OK");
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
