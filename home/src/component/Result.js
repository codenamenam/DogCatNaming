/* eslint-disable */

import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();

  if (location.state == null) {
    return <h1>Page not found.</h1>;
  }

  const breed = location.state.breed;
  const element = (
    <>
      <div>
        <h1>{breed} 선택하셨습니다.</h1>
      </div>
    </>
  );
  return element;
}

export default Result;
