/* eslint-disable */

import ref from "./Body";

function Breed(props) {
  return (
    <div class="breedAreaBG">
      {props.type != 0 && <h1>{props.type}을 선택하셨습니다.</h1>}
    </div>
  );
}

export default Breed;
