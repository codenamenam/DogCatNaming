function ResultSummary(props) {
  const breed = props.breed;
  const maxBreed = props.maxBreed;

  const element = (
    <div>
      <h1>
        {breed} 이름으로는 '{maxBreed}'가 가장 인기가 많아요.
      </h1>
    </div>
  );

  return element;
}

export default ResultSummary;
