var express = require("express");
var router = express.Router();

var todoController = require("../controllers/todoController");

router.get("/all-todos", todoController.getall);
router.post("/add", todoController.addTodo);
router.get("/getbyId/:id", todoController.getbyid);
router.put("/update/:id", todoController.updateTodo);
router.delete("/delete/:id", todoController.deleteTodo);

module.exports = router;