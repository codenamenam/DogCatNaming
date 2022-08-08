/* eslint-disable */

import ResultBody from "./ResultBody";
import { useState } from "react";

function Result() {
  const [data, setData] = useState(0);

  return (
    <div>
      <h1>{data} </h1>
      <ResultBody setData={setData} />
    </div>
  );
}

export default Result;
