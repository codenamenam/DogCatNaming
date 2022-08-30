/* eslint-disable */

import { useLocation } from "react-router-dom";
import ResultStat from "./Result/ResultStat";
import Campaign from "./Result/Campaign";

function Result() {
  const location = useLocation();

  //직접 주소로 접속했을때
  if (location.state == null) {
    return <h1>Page not found.</h1>;
  }

  const breed = location.state.breed;
  const typeSelect = location.state.typeSelect;

  return (
    <>
      <ResultStat breed={breed} typeSelect={typeSelect} />
      <Campaign typeSelect={typeSelect} />
    </>
  );
}

export default Result;
