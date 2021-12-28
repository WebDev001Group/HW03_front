import { Col, Space } from "antd";
import React from "react";
import { AddNote } from "./addNote";

import { NoteGrid } from "./noteGrid";

export function AppHome() {
  return (
    <Col
      gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
      style={style.space}
      className="container-fluid"
    >
      <Space direction="vertical" style={style.space}>
        <AddNote />
        <NoteGrid />
      </Space>
    </Col>
  );
}
const style = {
  space: {
    width: "100%",
  },
};
