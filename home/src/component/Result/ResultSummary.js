function ResultSummary(props) {
  const breed = props.breed;
  const maxBreed = props.maxBreed;

  const style = {
    background: "yellow",
  };
  const element = (
    <div style={style}>
      <h1>
        {breed} 이름으로는 '{maxBreed[0]}'가 가장 인기가 많아요.
      </h1>
    </div>
  );

  return element;
}

export default ResultSummary;
