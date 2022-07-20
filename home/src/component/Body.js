/* eslint-disable */
import "../App.css";
import React from "react";
import Breed from "./Breed";

/*
function selectCard(type) {
  if (type == 1) {
    console.log("Cat 선택");
    return (
      <div>
        <Breed type="1"></Breed>
      </div>
    );
  } else if (type == 2) {
    console.log("Dog 선택");
    return (
      <div>
        <Breed type="2"></Breed>
      </div>
    );
  } else {
    return (
      <div>
        <h1> 선택해주세요. </h1>
      </div>
    );
  }
}
*/

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      type: 0,
    };
    this.num = 0;
  }

  handleClick(type) {
    this.setState((state) => ({
      type: type,
    }));
  }

  render() {
    return (
      <div>
        <div class="card-deck">
          <br />
          <h1 class="title">동물을 선택해주세요.</h1>
          <br />
          <div class="col d-flex justify-content-center">
            <div class="row">
              <div class="col-6">
                <div class="card" onClick={() => this.handleClick(1)}>
                  <img
                    class="card-img-top"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                    alt=""
                  />
                  <div class="card-body mx-auto">
                    <h5 class="card-title">고양이</h5>
                  </div>
                  <a href="#" class="stretched-link"></a>
                </div>
              </div>

              <div class="col-6">
                <div class="card" onClick={() => this.handleClick(2)}>
                  <img
                    src="https://cdn.crowdpic.net/detail-thumb/thumb_d_382A8A747FFDF073E20C13398D110DE7.jpg"
                    alt=""
                    class="card-img-top"
                  />
                  <div class="card-body mx-auto">
                    <h5 class="card-title">강아지</h5>
                  </div>
                  <a href="#" class="stretched-link"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Breed type={this.state.type}></Breed>
      </div>
    );
  }
}

export default Body;
