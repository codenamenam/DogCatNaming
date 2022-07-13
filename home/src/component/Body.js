/* eslint-disable */
import "../App.css";
import Button from "react-bootstrap/Button";

const Body = () => {
  return (
    <div>
      <label for="pet-select">Choose a pet:</label>

      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-header">My Card</div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">고양이</h5>
              <p class="card-text">귀여움</p>
              <a href="#" class="btn btn-primary">
                More
              </a>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="card">
            <div class="card-header">My Card</div>
            <img
              src="https://cdn.crowdpic.net/detail-thumb/thumb_d_382A8A747FFDF073E20C13398D110DE7.jpg"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">강아지</h5>
              <p class="card-text">착함</p>
              <a href="#" class="btn btn-primary">
                More
              </a>
            </div>
          </div>
        </div>
      </div>

      <a class="btn btn-default" href="#" role="button">
        Link
      </a>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
    </div>
  );
};

export default Body;
