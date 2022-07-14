/* eslint-disable */
import "../App.css";
import Button from "react-bootstrap/Button";

const Body = () => {
  return (
    <div class="card-deck">
      <div class="col d-flex justify-content-center">
        <div class="row">
          <div class="col-6">
            <div class="card">
              <img
                class="card-img-top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">고양이</h5>
                <p class="card-text">귀여움</p>
                <a href="#" class="btn btn-primary">
                  선택
                </a>
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="card">
              <img
                src="https://cdn.crowdpic.net/detail-thumb/thumb_d_382A8A747FFDF073E20C13398D110DE7.jpg"
                alt=""
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">강아지</h5>
                <p class="card-text">착함</p>
                <a href="#" class="btn btn-primary">
                  선택
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
