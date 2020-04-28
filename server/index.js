const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const app = express();
const path = require("path");

// Importing Express Routes from the `routes` directory
const getTodos = require("./routes/getTodos.js");
const postTodo = require("./routes/postTodo.js");
const deleteTodo = require("./routes/deleteTodo.js");
const putTodo = require("./routes/putTodo.js");

// Express Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Routes
app.use("/todos", getTodos);
app.use("/todos", postTodo);
app.use("/todos", deleteTodo);
app.use("/todos", putTodo);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Started listening at ${PORT}`);
});
