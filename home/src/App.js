/* eslint-disable */

import "./App.css";
import Title from "./component/Title";
import Body from "./component/Body";
import Result from "./component/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  /*
  return (
    <BrowserRouter>
      <Title />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
  */
  /*
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const datas = await axios.get("http://localhost:4000/");
      setData(datas.data);
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (data === null) {
    return <div>Load..</div>;
  } else {
    console.log(data);
    return (
      <div>
        {data.map((ele) => (
          <>
            <div>
              현재 {ele.text}의 현황 : {ele.num}
            </div>
            <br />
          </>
        ))}
      </div>
    );
  }
  */
  /*
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const datas = await axios.get("http://localhost:4000/");
      setData(datas.data);
    };
    getData();
  }, "");

  useEffect(() => {
    console.log(data);
  }, "");

  var message = "";
  for (var i in data) {
    message += data.title;
  }
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
  */

  const [data, setData] = useState("Hi!");

  function clicked() {
    fetch("http://localhost:4000/")
      .then((res) => res.text())
      .then((data) => setData(data));
  }

  return (
    <>
      <h1>{data}</h1>
      <button onClick={clicked}>What's your name?</button>
    </>
  );
}

export default App;
