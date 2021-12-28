import Modal from "antd/lib/modal/Modal"
import { useState } from "react";

export const EditNoteModal = ({visible , handleOk , handleCancel})=>{
    

  
    return <Modal title="Basic Modal" visible={visible} onOk={handleOk} onCancel={handleCancel}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
}