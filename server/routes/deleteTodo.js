var models = require("../models");
var express = require("express");
var router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    const id  = req.params.id;
    await models.Todo.destroy({
      where: {
        id: id,
      },
    });
    res.json({ msg: "Todo Deleted" });
  } catch (error) {
    console.log(`Error Deleting Todo: ${error}`);
    res.status(500).end("Internal server error");
  }
});

module.exports = router;
