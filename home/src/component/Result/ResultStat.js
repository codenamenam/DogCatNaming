/* eslint-disable */

import ResultSummary from "./ResultSummary";
import NameData from "./NameData";
import Search from "./Search";
import RestAPI from "../../RestAPI";
import { useState } from "react";

function ResultStat(props) {
  const breed = props.breed;
  const typeSelect = props.typeSelect;
  var names = typeSelect === "cat" ? NameData[1] : NameData[0];
  const [summary, setSummary] = useState("No");

  //Django 백엔드에서 연산
  const data = Search(breed, typeSelect, names);
  console.log(data);
  //const temp = Object.keys(data);
  return (
    <div>
      <ResultSummary breed={breed} typeSelect={typeSelect} />
      <h1>{summary}</h1>
      <button
        onClick={() => {
          setSummary("asdf");
        }}
      >
        Update
      </button>
      <RestAPI />
    </div>
  );
}

export default ResultStat;
