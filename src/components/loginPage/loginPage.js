import { Form, Button, Card, Input, Row, message, Space, Col } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addNote, login } from "../../redux/actions";
import {
  loginProccess,
  signUpProccess,
} from "../../controller/loginController";
// import { Carousel } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import im1 from "../../assets/images/undraw_reminder_pa79.png";
import im2 from "../../assets/images/undraw_Notebook_re_id0r.png";
import im3 from "../../assets/images/undraw_ideas_flow_cy7b.png";
const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (userData) => dispatch(login(userData)),
    setNote: (data) => dispatch(addNote(data)),
  };
};

const LoginCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      renderItem={(item, isSelected) => {
        console.log("item: ", item, isSelected);
        return (
          <div style={{ backgroundColor: "teal", padding: 5, height: "100%" }}>
            {item}
          </div>
        );
      }}
      style={{ flex: 1 }}
    >
      <img src={im1} style={{ backgroundSize: "cover" }} alt="shet" />
      <img src={im2} style={{ backgroundSize: "cover" }} alt="shet" />
      <img src={im3} style={{ backgroundSize: "cover" }} alt="shet" />

      {/* <div>
        <img src={im1} alt="shet" />
      </div>
      <div>
        <img src={im2} alt="shet" />
      </div>
      <div>
        <img src={im3} alt="shet" />
      </div> */}
    </Carousel>
  );
};
const LoginPage = ({ isLoggedIn, login, setNote }) => {
  const navigate = useNavigate();

  if (isLoggedIn) navigate("/notes");

  return (
    <div className="gradientSelector">
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh", backgroundColor: "transparent" }}
      >
        <Content
          style={{
            borderRadius: 50,
            maxWidth: 900,
            height: 500,
            background: "rgba(255, 255, 255, 1)",
          }}
        >
          <div
            wrap={false}
            style={{
              display: "flex",
              height: "100%",
              backgroundColor: "transparent",
            }}
          >
            <div
              style={{
                flex: 1,
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Row
                type="flex"
                justify="center"
                align="middle"
                style={{ backgroundColor: "transparent", height: "100%" }}
              >
                <Card
                  style={{
                    backgroundColor: "transparent",
                    borderRadius: 20,
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  <Demo navigate={navigate} login={login} setNote={setNote} />
                </Card>
              </Row>
            </div>
            <div style={{ flex: 1, backgroundColor: "red" }}>
              <img
                src={im1}
                style={{ height: "100%", width: "100%" }}
                alt="shet"
              />
            </div>
          </div>
        </Content>
      </Row>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
const Demo = ({ navigate, login, setNote }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("fields:", values);
    let result;
    if (isSignUp) {
      console.log("signUp");
      result = await signUpProccess(
        values["username"],
        values["password"],
        values["r_password"]
      );
      if (result.status) {
        result = await loginProccess(values["username"], values["password"]);
        if (result.status) {
          login(result.data);
          navigate("/notes");
        } else {
          message.error(result.message);
        }
      } else {
        message.error(result.message);
      }
    } else {
      console.log("login");
      result = await loginProccess(values["username"], values["password"]);
      console.log("fields:", result);
      if (result.status) {
        login(result.data);
        // setNote([])
        navigate("/notes");
      } else {
        message.error(result.message);
      }
    }
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      {isSignUp ? (
        <Form.Item
          label="Reapeat"
          name="r_password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
      ) : null}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            // onClick={() => navigate("/notes")}
          >
            Submit
          </Button>
          <Button onClick={() => setIsSignUp(!isSignUp)}>
            {!isSignUp ? "go to sign in" : "go to log in"}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
