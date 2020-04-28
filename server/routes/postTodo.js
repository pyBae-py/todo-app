const models = require("../models");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { description, status } = req.body;
    const todos = await models.Todo.create({
      description: description,
      status: status,
    });
    res.json({ msg: "Todo Posted" });
  } catch (error) {
    console.log(`Error posting todos: ${error}`);
    res.status(500).end("Internal server error");
  }
});

module.exports = router;
