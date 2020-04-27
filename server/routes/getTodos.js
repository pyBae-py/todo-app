var models = require("../models");
var express = require("express");
var router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todos = await models.Todo.findAll({
      order: [["description", "ASC"]],
    });
    res.json(todos);
  } catch (error) {
    console.log(`Error getting todos: ${error}`);
    res.status(500).end("Internal server error");
  }
});

module.exports = router;
