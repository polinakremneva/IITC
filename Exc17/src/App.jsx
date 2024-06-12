import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoStatistics from "./components/TodoStatistics";
import FilterByTitle from "./components/FilterByTitle";

const URL = "http://localhost:8001/todos";
function App() {
  const [todos, setTodos] = useState([]);
  const [editTitle, setEditTitle] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Hello!");
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  function addTodo(ev) {
    ev.preventDefault();
    const newTodo = {
      id: makeId(),
      title: inputRef.current.value,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
    inputRef.current.value = "";
    inputRef.current.focus();
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

  function toggleComplete(todoId) {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  }

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.isComplete).length;
  const activeTodos = totalTodos - completedTodos;
  const completionPercentage =
    totalTodos === 0 ? 0 : (completedTodos / totalTodos) * 100;
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main>
      <h1>To Do List</h1>
      <FilterByTitle
        query={query}
        setQuery={setQuery}
      />
      <AddTodoForm addTodo={addTodo} inputRef={inputRef} />
      <TodoList
        todos={filteredTodos}
        editTodoId={editTodoId}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        updateTodoTitle={updateTodoTitle}
        startEditing={startEditing}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
      <TodoStatistics
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        activeTodos={activeTodos}
        completionPercentage={completionPercentage}
      />
    </main>
  );
}

export default App;
