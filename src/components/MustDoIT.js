import React from "react";
import EnterYourMustDo from "./EnterYourMustDo";
import TodoList from "./TodoList";
import "./MustDoIt.css";

const MustDoIT = (props) => {
  return (
    <div className="MustDoIt">
      <EnterYourMustDo></EnterYourMustDo>
      <TodoList></TodoList>
    </div>
  );
};

export default MustDoIT;
