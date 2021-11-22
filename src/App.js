import { useState } from "react";
import "./App.css";
import MustDoIT from "./components/MustDoIT";
import Nav from "./components/Nav";

function App() {
  const [input, setInput] = useState("");
  const [mustdo, setMustdo] = useState([
    { id: 0, text: " 리액트 소개1" },
    { id: 1, text: " 리액트 소개2" },
    { id: 2, text: " 리액트 소개3" },
  ]);
  const onCreate = (e) => {
    // setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <Nav></Nav>
      <MustDoIT input={input} mustdo={mustdo} />
    </>
  );
}

export default App;
