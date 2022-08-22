/* eslint-disable */

import ResultSummary from "./ResultSummary";
import NameData from "./NameData";
import Search from "./Search";

function ResultStat(props) {
  const breed = props.breed;
  const typeSelect = props.typeSelect;
  const names = typeSelect === "cat" ? NameData[1] : NameData[0];

  // Search 결과 db로부터 받아옴
  const result = Search(breed, typeSelect, names);

  return (
    <div>
      <ResultSummary breed={breed} typeSelect={typeSelect} />
      <h1>{JSON.stringify(result)}</h1>
    </div>
  );
}

export default ResultStat;
