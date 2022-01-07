import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import AddNote from "./addNote";
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
      <AddNote state={state} open={true}/>
    </Modal>
  );
};
