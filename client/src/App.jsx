import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListTodos from "./components/ListTodos.jsx";
import InputTodo from "./components/InputTodo.jsx";
import ListDoneTodos from "./components/ListDoneTodos.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App-wrapper">
        <InputTodo />

        <div className="Buttons-wrapper">
          <Link to="/notdone">
            <button className="btn btn-success" id="Not-done-button">
              Not Done
            </button>
          </Link>
          <Link to="/done">
            <button className="btn btn-success" id="Done-button">
              Done
            </button>
          </Link>
        </div>
        <Switch>
          <Route path="/notdone">
            <ListTodos />
          </Route>
          <Route path="/done">
            <ListDoneTodos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
