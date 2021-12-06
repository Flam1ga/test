import Button from "./Button.js";
import { Col, Container, Row } from "react-bootstrap";
import "./table.css";

const Table = ({ riders, setChecked, checked }) => {
  const indoorIsClicked = () => {
    alert("Riding outdoor");
  };

  const wood = () => {
    alert("Riding in the wood");
  };

  const list = riders.map((rider, indoor) => (
    <Row>
      <Col>{rider.name}</Col>
      <Col>
        <Button></Button>
        {rider.indoor}
      </Col>
      <Col>
        <Button />
        {rider.outdoor}
      </Col>
      <Col>
        <Button />
        {rider.wood}
      </Col>
    </Row>
  ));

  return (
    <div>
      <Container>
        <Row className="heading">
          <Col>Navn</Col>
          <Col>Indendørs</Col>
          <Col>Udendørs</Col>
          <Col>Skoven</Col>
        </Row>
        <Row className="ridersList">{list}</Row>
      </Container>
    </div>
  );
};

export default Table;
