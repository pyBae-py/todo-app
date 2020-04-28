import React from "react";
import ListTodos from "./components/ListTodos.jsx";
import InputTodo from "./components/InputTodo.jsx";
import "./App.css";

function App() {
  return (
    <div className="App-wrapper">
      <InputTodo/>
      <ListTodos />
    </div>
  );
}

export default App;
