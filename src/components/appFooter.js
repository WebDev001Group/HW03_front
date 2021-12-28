import React from "react";
import {
  GithubFilled,
  LinkedinFilled,
  ThunderboltOutlined,
  TwitterCircleFilled,
  UpCircleFilled,
} from "@ant-design/icons";

import { BackTop } from "antd";
const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,

    // backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
  };
function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <ThunderboltOutlined />
          <a href="https://github.com/WebDev001Group">Notie</a>
        </div>
        <ul className="socials">
          <li>
            <a href="https://github.com/WebDev001Group">
              <GithubFilled />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <TwitterCircleFilled />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <LinkedinFilled />
            </a>
          </li>
        </ul>
        <div className="copyright">Copyright &copy; 2021 yasin moosavi</div>
        <BackTop>
        <UpCircleFilled style={style} size={"large"} />
                 </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;
