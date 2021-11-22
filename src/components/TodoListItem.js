import React from "react";

const TodoListItem = (props) => {
  return (
    <div className="TodoList_item">
      <hr />
      <p>{props.mustdo[0].text}</p>
    </div>
  );
};

export default TodoListItem;
