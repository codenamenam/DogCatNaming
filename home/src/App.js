/* eslint-disable */

import "./App.css";
import Title from "./component/Title";
import Body from "./component/Body";
import Result from "./component/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Title />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
