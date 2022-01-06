import React from "react";

import { Anchor } from "antd";
import { ThunderboltOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Link } = Anchor;

function AppHeader({ logout }) {
  const navigate = useNavigate();
  const onClick = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <ThunderboltOutlined />
          <a href="https://github.com/WebDev001Group">Notie</a>
        </div>
        <div onClick={onClick}>
          <Anchor targetOffset="65">
            <Link title="logout" />
          </Anchor>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
