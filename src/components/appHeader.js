import React from "react";

import { Anchor } from "antd";
import { ThunderboltOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";

const { Text } = Typography;
const { Link } = Anchor;

function AppHeader({ logout, username }) {
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
        <div style={{ flexDirection: "row", display: "flex" , alignItems:"center" }}>
        <div >
            <Anchor>
            <Text type="success">{username}</Text>
            </Anchor>
          </div>
          

          <div onClick={onClick}>
            <Anchor>
              <Link title="logout" />
            </Anchor>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
