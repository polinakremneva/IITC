import React from "react";

function AddTodoForm(props) {
  return (
    <form onSubmit={props.addTodo}>
      <label htmlFor="new-todo">Add a todo</label>
      <input
        id="new-todo"
        type="text"
        ref={props.inputRef}
      />
      <button>Add</button>
    </form>
  );
}

export default AddTodoForm;
