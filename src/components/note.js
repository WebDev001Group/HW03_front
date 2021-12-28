import { Card, Avatar } from "antd";
import {
  DeleteFilled,
  EditFilled,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const text =
  "This is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the description";
const { Meta } = Card;
export const Note = ({ src, avatar, title, description }) => {
  return (
    <Card
      cover={src ? <img alt="example" src={src} /> : null}
      actions={[<EditFilled key="edit" />, <DeleteFilled key="delete" />]}
    >
      <Meta
        avatar={<Avatar src={avatar ?? "https://joeschmoe.io/api/v1/random"} />}
        title={title ?? "Card title"}
        description={description ?? text}
      />
    </Card>
  );
};
