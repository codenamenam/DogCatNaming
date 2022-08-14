/* eslint-disable */

import ResultSummary from "./ResultSummary";
import NameData from "./NameData";
import Search from "./Search";

function ResultStat(props) {
  const breed = props.breed;
  const typeSelect = props.typeSelect;
  var names = typeSelect === "cat" ? NameData[1] : NameData[0];

  const data = Search(breed, typeSelect, names);

  return (
    <div>
      <ResultSummary breed={breed} typeSelect={typeSelect} />
      <h1>{data}</h1>
    </div>
  );
}

export default ResultStat;
