/*eslint-disable*/

import { useEffect } from "react";
import { Chart } from "react-google-charts";

function ShowChart(props) {
  const data = [["Name", "Number"]];

  let count = 0;
  for (let i in props.result) {
    if (count == 10) {
      break;
    }
    data.push(props.result[i]);
    count++;
  }

  const options = {
    title: "강아지 이름",
    width: 600,
    height: 400,
    bar: { groupWidth: "80%" },
    legend: { position: "none" },
  };
  const chart = (
    <Chart
      chartType="BarChart"
      width="100%"
      height="500px"
      data={data}
      options={options}
    />
  );

  //차트 만들기
  useEffect(() => {});

  const style = {
    background: "brown",
  };
  return <div style={style}>{chart}</div>;
}

export default ShowChart;
