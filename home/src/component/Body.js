/* eslint-disable */
import "../App.css";
import React, { useState, useRef } from "react";
import Breed from "./Breed";

function Body() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  const handleClick = (type) => {
    setValue(type);

    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
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

      <div style={{ height: "15rem" }} />
      <Breed type={value}></Breed>
      <div ref={ref} />
    </div>
  );
}

export default Body;
