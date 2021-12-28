import { UserOutlined } from "@ant-design/icons";
import { Button, Col, Collapse, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export const AddNote = () => {
  return (
    <div style={style.parent}>
      <Collapse bordered={false} onChange={callback} style={style.collapse}>
        <Panel
          header={
            <Row style={{ width: "100%" }}>
              <Col flex={4}>
                <Input
                  size="large"
                  placeholder="start a new notie:)"
                  prefix={<UserOutlined />}
                />
              </Col>
              <Col flex={1}>
                <Button style={{ width: "100%", height: "100%" }}>
                  submit
                </Button>
              </Col>
            </Row>
          }
          key="1"
          showArrow={false}
        >
          <TextArea rows={4} defaultValue={"more explanations..."} />{" "}
        </Panel>
      </Collapse>
    </div>
  );
};
const style = {
  collapse: {
    width:"100%",
    maxWidth:900,
  },
 
  parent:{
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
};
