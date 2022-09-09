/* eslint-disable */

import { useEffect } from "react";
import ResultSummary from "./ResultSummary";
import Search from "./Search";
import ShowChart from "./ShowChart";
import Campaign from "./Campaign";

function ResultStat(props) {
  const breed = props.breed;
  const typeSelect = props.typeSelect;

  // Search 결과 db로부터 받아옴
  const result = Search(breed, typeSelect);

  if (typeof result === "string") {
    return <></>;
  }

  const style = {
    margin: "70px",
  };

  const containerStyle = {
    margin: "50px",
  };
  return (
    <div className="ResultContainer" style={containerStyle}>
      <div class="row" style={style}>
        <div class="col-sm-5">
          <ResultSummary breed={breed} maxBreed={result[0]} />
        </div>
        <div class="col-sm-5">
          <ShowChart result={result} />
        </div>
      </div>
      <Campaign typeSelect={typeSelect} />
    </div>
  );
}

export default ResultStat;
