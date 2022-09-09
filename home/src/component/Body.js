/* eslint-disable */
import "../App.css";
import React, { useState, useRef, useEffect } from "react";
import Breed from "./Breed";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";

function Body() {
  const [animal, setAnimal] = useState(0);
  //고양이/강아지 선택 시 아래로 스크롤
  const ref = useRef();

  const containerPaddingTop = {
    paddingTop: "100px",
  };

  const cardDeckStyle = {
    float: "none",
    margin: "0 auto",
  };

  useEffect(() => {
    if (animal != 0) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [animal]);

  //Bootstrap card-deck 이용
  const dogCatSelectElement = (
    <Container style={containerPaddingTop}>
      <Row xs={1} className="justify-content-center">
        <Col md="auto">
          <h1>동물을 선택해주세요.</h1>
        </Col>
      </Row>
      <Row xs={2} style={cardDeckStyle}>
        <Col>
          <Card onClick={() => handleClick(1)} style={cardDeckStyle}>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            />
            <Card.Body>
              <Card.Title>고양이</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card onClick={() => handleClick(2)} style={cardDeckStyle}>
            <Card.Img
              variant="top"
              src="https://cdn.crowdpic.net/detail-thumb/thumb_d_382A8A747FFDF073E20C13398D110DE7.jpg"
            />
            <Card.Body>
              <Card.Title>강아지</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );

  //클릭 시 고양이/강아지 종류 결정. 1번이 고양이, 2번이 강아지
  const handleClick = (animal) => {
    setAnimal(animal);
  };

  return (
    <>
      {dogCatSelectElement}
      <div style={{ height: "36px" }} />
      <Breed animal={animal} />
      <div ref={ref} />
    </>
  );
}

export default Body;
