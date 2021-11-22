import React from "react";
import EnterYourMustDo from "./EnterYourMustDo";
import TodoList from "./TodoList";
import "./MustDoIt.css";

const MustDoIT = (props) => {
  return (
    <div className="MustDoIt">
      <EnterYourMustDo onCreate={props.onCreate}></EnterYourMustDo>
      <TodoList mustdo={props.mustdo}></TodoList>
    </div>
  );
};

export default MustDoIT;
