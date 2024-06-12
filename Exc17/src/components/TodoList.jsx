import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            editTodoId={props.editTodoId}
            editTitle={props.editTitle}
            setEditTitle={props.setEditTitle}
            updateTodoTitle={props.updateTodoTitle}
            startEditing={props.startEditing}
            removeTodo={props.removeTodo}
            toggleComplete={props.toggleComplete}
          />
        ))
      )}
    </ul>
  );
}

export default TodoList;
