import ResultSummary from "./ResultSummary";
import NameData from "./NameData";

function ResultStat(props) {
  const breed = props.breed;
  const typeSelect = props.typeSelect;
  const names = typeSelect == "cat" ? NameData[1] : NameData[0];

  return (
    <div>
      <ResultSummary breed={breed} typeSelect={typeSelect} />
      <h1>{names}</h1>
    </div>
  );
}

export default ResultStat;
