var express = require("express");
var router = express.Router();

var userController = require("../controllers/userController");

router.get("/all-users", userController.getall);
router.post("/add", userController.adduser);
router.get("/getbyId/:id", userController.getbyid);
router.put("/update-user/:id", userController.updateuser);
router.delete("/delete/:id", userController.deleteuser);

module.exports = router;