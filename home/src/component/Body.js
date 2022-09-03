/* eslint-disable */
import "../App.css";
import React, { useState, useRef, useEffect } from "react";
import Breed from "./Breed";

function Body() {
  const [animal, setAnimal] = useState(0);
  //고양이/강아지 선택 시 아래로 스크롤
  const ref = useRef();

  useEffect(() => {
    if (animal != 0) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [animal]);

  //Bootstrap card-deck 이용
  const dogCatSelectElement = (
    <div class="card-deck">
      <br />
      <h1 class="title">동물을 선택해주세요.</h1>
      <br />
      <div class="col d-flex justify-content-center">
        <div class="row">
          <div class="col-6">
            <div class="card" onClick={() => handleClick(1)}>
              <img
                class="card-img-top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                alt=""
              />
              <div class="card-body mx-auto">
                <h5 class="card-title">고양이</h5>
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="card" onClick={() => handleClick(2)}>
              <img
                src="https://cdn.crowdpic.net/detail-thumb/thumb_d_382A8A747FFDF073E20C13398D110DE7.jpg"
                alt=""
                class="card-img-top"
              />
              <div class="card-body mx-auto">
                <h5 class="card-title">강아지</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
