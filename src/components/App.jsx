import { Divider, Row, Col } from "antd";

import Board from "./Board";
import ButtonLoader from "./ButtonLoader";
const App = () => {
  return (
    <>
      <Row justify="center" gutter={[110, 444]}>
        <ButtonLoader />
      </Row>

      <Divider>User List</Divider>

      <Row>
        <Col lg={{ span: 18, offset: 3 }} md={24} xs={24}>
          <Board />
        </Col>
      </Row>
    </>
  );
};

export default App;
