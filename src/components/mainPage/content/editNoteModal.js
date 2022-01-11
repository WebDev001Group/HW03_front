import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import AddNoteWidget from "../../../widgets/addNote";
export const EditNoteModal = ({ visible, handleOk, handleCancel , state}) => {
  console.log("modal state: ",state)
  return (
    <Modal
      title="Edit Note"
      visible={visible}
      onOk={handleOk}
      footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
           
          ]}
      onCancel={handleCancel}
    >
      <AddNoteWidget state={state} open={true}/>
    </Modal>
  );
};
