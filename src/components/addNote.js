import { Collapse } from "antd";
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
    <div style={style.div}>
      <Collapse onChange={callback} style={style.collapse}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};
const style = {
  collapse: {
    width: "80%",
  },
  div: {
    marginTop: 10,
  },
};
