/* eslint-disable */

import { useEffect } from "react";
import ResultSummary from "./ResultSummary";
import Search from "./Search";

function ResultStat(props) {
  const breed = props.breed;
  const typeSelect = props.typeSelect;

  // Search 결과 db로부터 받아옴
  const result = Search(breed, typeSelect);

  // 필요없는 데이터 삭제
  delete result.id;
  delete result.breed;

  // json을 값 기준으로 정렬
  let orderedResult = [];
  for (let i in result) {
    orderedResult.push([i, result[i]]);
  }
  orderedResult.sort(function (a, b) {
    return b[1] - a[1];
  });

  console.log(orderedResult);

  function chart() {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.async = true;
      document.body.appendChild(script);
    });
  }

  return (
    <>
      <div>
        <ResultSummary breed={breed} maxBreed={orderedResult[0]} />
      </div>
      <div>
        <h1>{orderedResult}</h1>
      </div>
    </>
  );
}

export default ResultStat;
