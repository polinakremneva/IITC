import React, { useState } from "react";
import "./App.css";

function App() {
  const INITIAL_TODOS = [
    { id: '1', title: 'Learn React', isComplete: false },
    { id: '2', title: 'Build a Todo App', isComplete: false },
    { id: '3', title: 'Read JavaScript Documentation', isComplete: true },
    { id: '4', title: 'Write Unit Tests', isComplete: false },
    { id: '5', title: 'Implement Context', isComplete: true },
    { id: '6', title: 'Create Portfolio Website', isComplete: false },
    { id: '7', title: 'Learn TypeScript', isComplete: false },
    { id: '8', title: 'Refactor Codebase', isComplete: true },
    { id: '9', title: 'Optimize Performance', isComplete: false },
    { id: '10', title: 'Deploy to Production', isComplete: true }
  ];

  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [newTitle, setNewTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);

  function addTodo(ev) {
    ev.preventDefault();
    const newTodo = {
      id: makeId(),
      title: newTitle,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
    setNewTitle("");
  }

  function removeTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  function makeId(length = 5) {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  function startEditing(todo) {
    setEditTodoId(todo.id);
    setEditTitle(todo.title);
  }

  function updateTodoTitle(ev) {
    ev.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === editTodoId ? { ...todo, title: editTitle } : todo
      )
    );
    setEditTodoId(null); 
    setEditTitle("");
  }

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.isComplete).length;
  const activeTodos = totalTodos - completedTodos;
  const completionPercentage = totalTodos === 0 ? 0 : (completedTodos / totalTodos) * 100;

  return (
    <main>
      <h1>To Do List</h1>
      <form onSubmit={addTodo}>
        <label htmlFor="">Add a todo</label>
        <input
          type="text"
          value={newTitle}
          onChange={(ev) => setNewTitle(ev.target.value)}
        />
        <button>Add</button>
      </form>

      

      <ul className="todo-list">
        {todos.length === 0 ? (
          <p>No todos available</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() =>
                  setTodos(
                    todos.map((item) =>
                      item.id === todo.id
                        ? { ...item, isComplete: !item.isComplete }
                        : item
                    )
                  )
                }
              />
              {editTodoId === todo.id ? (
                <form onSubmit={updateTodoTitle}>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(ev) => setEditTitle(ev.target.value)}
                  />
                  <button>Save</button>
                </form>
              ) : (
                <>
                  {todo.title}
                  <div className="button-group">
                    <button className="edit-button" onClick={() => startEditing(todo)}>Edit</button>
                    <button className="delete-button" onClick={() => removeTodo(todo.id)}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </main>
  );
}

export default App;
