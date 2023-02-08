const express = require("express");
const router = express.Router();
const todoCtrl = require("../controllers/todoCtrl");

router.post("/todo", todoCtrl.createTodo);
router.get("/todo", todoCtrl.getTodos);
router.patch("/todo/:id", todoCtrl.updateTodo);
router.delete("/todo/:id", todoCtrl.deleteTodo);

module.exports = router;
