/* eslint-disable */

import ResultSummary from "./ResultSummary";
import NameData from "./NameData";
import Search from "./Search";
import RestAPI from "../../RestAPI";

function ResultStat(props) {
  const breed = props.breed;
  const typeSelect = props.typeSelect;
  var names = typeSelect === "cat" ? NameData[1] : NameData[0];

  //Django 백엔드에서 연산
  const data = Search(breed, typeSelect, names);

  var temp = "";
  for (var i in data) {
    temp += "key: " + i + " values: " + data[i] + "\n";
  }

  return (
    <div>
      <ResultSummary breed={breed} typeSelect={typeSelect} />
      <h1>{temp}</h1>
      <RestAPI />
    </div>
  );
}

export default ResultStat;
