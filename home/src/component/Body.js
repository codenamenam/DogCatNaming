/* eslint-disable */
import "../App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Body = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ maxWidth: "22rem" }}>
            <Card.Img
              variant="Top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            />
            <Card.Body>
              <Card.Text>🐱</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ maxWidth: "22rem" }}>
            <Card.Img
              variant="Top"
              src="https://cdn.crowdpic.net/detail-thumb/thumb_d_382A8A747FFDF073E20C13398D110DE7.jpg"
            />
            <Card.Body>
              <Card.Text>🐶</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
