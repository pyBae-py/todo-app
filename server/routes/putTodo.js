const models = require("../models");
const express = require("express");
const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { description, status } = req.body;
    await models.Todo.update(
      { description: description, status: status },
      {
        where: {
          id: id,
        },
      }
    );
    res.json({ msg: "Todo Updated" });
  } catch (error) {
    console.log(`Error Updating Todo: ${error}`);
    res.status(500).end("Internal server error");
  }
});

module.exports = router;
