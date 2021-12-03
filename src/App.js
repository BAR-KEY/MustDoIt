import React from "react";
import "./App.css";
import MustDoIT from "./components/MustDoIT";
import Nav from "./components/Nav";

class App extends React.Component {
  state = {
    input: "",
    mustdo: [
      { id: 0, text: " 리액트 소개1" },
      { id: 1, text: " 리액트 소개2" },
      { id: 2, text: " 리액트 소개3" },
    ],
  };
  handleChange = (e) => {
    //   // this.setState({
    //   //   input: e.target.value,
    //   // });
    //   console.log("it works");
  };
  redner() {
    const { input, mustdo, handleChange } = this.state;
    return (
      <>
        <Nav></Nav>
        <MustDoIT input={input} mustdo={mustdo} onChange={handleChange} />
        <p>hi hi</p>
      </>
    );
  }
}

export default App;
