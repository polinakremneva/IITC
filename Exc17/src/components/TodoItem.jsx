import React from "react";

function TodoItem(props) {
  return (
    <li key={props.todo.id} className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.isComplete}
        onChange={() => props.toggleComplete(props.todo.id)}
      />
      {props.editTodoId === props.todo.id ? (
        <form onSubmit={props.updateTodoTitle}>
          <input
            type="text"
            value={props.editTitle}
            onChange={(ev) => props.setEditTitle(ev.target.value)}
          />
          <button>Save</button>
        </form>
      ) : (
        <>
          {props.todo.title}
          <div className="button-group">
            <button className="edit-button" onClick={() => props.startEditing(props.todo)}>Edit</button>
            <button className="delete-button" onClick={() => props.removeTodo(props.todo.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
