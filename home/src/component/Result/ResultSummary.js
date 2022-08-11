function ResultSummary(props) {
  const breed = props.breed;
  const typeSelect = props.typeSelect;

  const element = (
    <div>
      <h1>
        {typeSelect} {breed} 이름으로는 '호두'가 가장 인기가 많아요.
      </h1>
    </div>
  );
  return element;
}

export default ResultSummary;
