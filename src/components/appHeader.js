import React from "react";

import { Anchor } from "antd";
import { ThunderboltOutlined } from "@ant-design/icons";
const { Link } = Anchor;

function AppHeader() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <ThunderboltOutlined />
          <a href="https://github.com/WebDev001Group">Notie</a>
        </div>
        <Anchor targetOffset="65">
          <Link href="/" title="logout" />
        </Anchor>
      </div>
    </div>
  );
}

export default AppHeader;
